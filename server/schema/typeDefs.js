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
  }

  type Query {
    user(username: String!): User
    users: [User]
    exercises: [Exercises]
  }

  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    exercises: [String]
  }
`;
module.exports = typeDefs;
