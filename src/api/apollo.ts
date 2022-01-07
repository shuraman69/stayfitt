import { gql } from '@apollo/client'

export const CHALLENGES = gql`
  {
    me {
      id
      activeChallenges {
        edges {
          node {
            title
            id
            goal
            goalUnits
            startDate
            endDate
            type
            globalProgress
            media {
              full_url
            }
          }
        }
      }
      passedChallenges {
        edges {
          node {
            title
            id
            goal
            goalUnits
            startDate
            endDate
            type
            globalProgress
            media {
              full_url
            }
          }
        }
      }
    }
  }
`
