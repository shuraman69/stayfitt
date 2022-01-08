import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppContainer } from './AppContainer'
import { getUserToken } from '../api/api'
import { useRef } from 'react'
import { LOCATION } from '../helpers/constants'

export const ApolloAppContainer = () => {
  const client = useRef(
    new ApolloClient({
      uri: LOCATION.apollo,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    })
  )

  return (
    <ApolloProvider client={client.current}>
      <AppContainer />
    </ApolloProvider>
  )
}
