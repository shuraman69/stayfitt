import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { AppContainer } from './src/components/AppContainer'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { getUserToken } from './src/api/api'


const client = new ApolloClient({
  uri: 'https://56.inskill-dev.ru/api/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${getUserToken()}`,
  },
})


export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </ApolloProvider>
  )
}

