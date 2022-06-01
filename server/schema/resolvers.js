
const { AuthenticationError } = require('apollo-server-express');
const { User, Exercises } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      users: async () => {
        return User.find()
          .select('-__v -password')
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
          },
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
            },
            Exercisess: async (parent, { username }) => {
              const params = username ? { username } : {};
              return Exercises.find(params).sort({ createdAt: -1 });
            },
            Exercises: async (parent, { _id }) => {
              return Exercises.findOne({ _id });
            }
          },
          Mutation: {
            addUser: async (parent, args) => {
              const user = await User.create(args);
              const token = signToken(user);
        
              return { token, user };
            },
            login: async (parent, { email, password }) => {
              const user = await User.findOne({ email });
        
              if (!user) {
                throw new AuthenticationError('Incorrect credentials');
              }
        
              const correctPw = await user.isCorrectPassword(password);
        
              if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
              }
        
              const token = signToken(user);
              return { token, user };
            },
            addExercises: async (parent, args, context) => {
              if (context.user) {
                const Exercises = await Exercises.create({ ...args, username: context.user.username });
        
                await User.findByIdAndUpdate(
                  { _id: context.user._id },
                  { $push: { Exercisess: Exercises._id } },
                  { new: true }
                );
                return Exercises;
              }
        
              throw new AuthenticationError('You need to be logged in!');
            },
            addReaction: async (parent, { ExercisesId, reactionBody }, context) => {
              if (context.user) {
                const updatedExercises = await Exercises.findOneAndUpdate(
                  { _id: ExercisesId },
                  { $push: { reactions: { reactionBody, username: context.user.username } } },
                  { new: true, runValidators: true }
                );
        
                return updatedExercises;
              }
        
              throw new AuthenticationError('You need to be logged in!');
            },
            addFriend: async (parent, { friendId }, context) => {
              if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $addToSet: { friends: friendId } },
                  { new: true }
                ).populate('friends');
        
                return updatedUser;
              }
        
              throw new AuthenticationError('You need to be logged in!');
            }
          }
        };
        
        module.exports = resolvers;
        

const {User, Exercises} = require('../models')

const resolvers = {

    Query: {
        user: async () => {
            return User.find()
              .select('-__v -password')
              
    }
}

}
module.exports = resolvers;

