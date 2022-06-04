import { gql } from '@apollo/client';
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