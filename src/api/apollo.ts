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
            bonusPoints
            pivot {
              progress
            }
            endDate
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
            bonusPoints
            pivot {
              progress
            }
            endDate
            media {
              full_url
            }
          }
        }
      }
    }
  }
`
