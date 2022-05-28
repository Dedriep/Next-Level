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
