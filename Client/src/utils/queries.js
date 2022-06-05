import { gql } from '@apollo/client';


export const QUERY_ME = gql `
query me {
    me {
      _id
      username
      email
      tracker
      exercises {
        _id
        exerciseTypes
        reps
        sets
      }
    }
  }
`

export const QUERY_EXERCISES = gql`
  query Exercises($id: ID!) {
    exercises(_id: $id) {
      _id
      exerciseTypes
      reps
      sets
    }
  }
`