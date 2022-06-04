import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        tracker
        email
        username
        _id
      }
    }
  }`

  export const ADD_USER = gql`
  mutation addUser($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password) {
      token
    }
  }
  `

  export const ADD_WORKOUT = gql`
  mutation addWorkout($sets: Int!, $reps: Int!, $exerciseTypes: [String!]) {
    addWorkout(sets: $sets, reps: $reps, exerciseTypes: $exerciseTypes) {
      exerciseTypes
      reps
      sets
      _id
    }
  }
  
  `