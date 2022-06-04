import { gql } from '@apollo/client';


export const QUERY_LOGGEDIN = gql `

query LoggedInUser {
    LoggedInUser {
      _id
      username
      email
      tracker
    }
  }
`
export const QUERY_WORKOUTS = gql `

query Exercises($id: ID!) {
    exercises(_id: $id) {
      exerciseTypes
      reps
      sets
    }
  }

`