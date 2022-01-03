import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AUTH_SCREEN} from "./src/helpers/screens";
import {AuthStackScreen} from "./src/stacks/AuthStack";

const MainStack = createNativeStackNavigator()
export default function App() {
 return (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen options={{headerShown:false}} name={AUTH_SCREEN} component={AuthStackScreen}/>
    </MainStack.Navigator>
  </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});
