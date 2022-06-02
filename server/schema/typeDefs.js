const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    exercises: [Exercises]
  }

  type Exercises {
    _id: ID
    exerciseTypes: String
    reps: Int
    sets: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    exercises(_id: ID!): Exercises
  }

  type Mutation {
    addUser(email: String!, username: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(
      userId: ID!
      exerciseTypes: String!
      reps: Int!
      sets: Int!
    ): Exercises
  }
`;
module.exports = typeDefs;
