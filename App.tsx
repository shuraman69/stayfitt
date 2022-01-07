import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AUTH_SCREEN, AUTH_STACK_SCREEN} from "./src/helpers/screens";
import {AuthStackScreen} from "./src/stacks/AuthStack";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import {AppContainer} from "./src/components/AppContainer";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {getHeaderWithToken, getUserToken} from "./src/api/api";


const client = new ApolloClient({
 uri: 'https://56.inskill-dev.ru/api/graphql',
 cache: new InMemoryCache(),
 headers: {
  Authorization: `Bearer ${getUserToken()}`
 }
});


export default function App() {
 return (
   <Provider store={store}>
  <ApolloProvider client={client}>
    <AppContainer/>
  </ApolloProvider>
   </Provider>
 );
}

