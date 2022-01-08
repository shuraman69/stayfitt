import {Provider} from 'react-redux'
import {persistor, store} from './src/redux/store'
import {PersistGate} from "redux-persist/integration/react";
import {ApolloAppContainer} from "./src/components/ApolloAppContainer";


export default function App() {
 return (
  <Provider store={store}>
   <PersistGate persistor={persistor} loading={null}>
    <ApolloAppContainer/>
   </PersistGate>
  </Provider>
 )
}

