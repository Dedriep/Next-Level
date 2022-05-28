const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    exercises: [exercises]
    
  }


`;
module.exports = typeDefs;
