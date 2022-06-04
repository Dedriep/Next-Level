const { AuthenticationError } = require('apollo-server-express');
const { User, Exercises } = require('../models');
const { signToken } = require('../auth');

const resolvers = {
  Query: {
    LoggedInUser: async (parent, args, context) => {
      if (context.user) {
        const currentUser = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

        return currentUser
      }

      throw new AuthenticationError('You are not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('exercises')
    },

    exercises: async (parent,{username}) => {
      const params = username ? { username } : {};
      return Exercises.find(params)
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)

      return { token, user }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Username Incorrect!');
      }
      const rightPassword = await user.isCorrectPassword(password);

      if (!rightPassword) {
        throw new AuthenticationError('Your password is incorrect!');
      }
      await User.findByIdAndUpdate(
        { _id: user._id },
        { tracker: user.tracker +1},
        { new: true }
      )
      const token = signToken(user);
      return { token, user };
    },

    addWorkout: async (parent, args, context) => {
      if (context.user) {
        const exercises = await Exercises.create( args);

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { exercises: exercises._id } },
          { new: true }
        );

        return exercises;
      }

      throw new AuthenticationError('You are not logged in, please login!');
    },

  }
};

module.exports = resolvers;


