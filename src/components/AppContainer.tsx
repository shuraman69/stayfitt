import {NavigationContainer} from "@react-navigation/native";
import {AUTH_STACK_SCREEN, CONTENT_STACK_SCREEN} from "../helpers/screens";
import {AuthStackScreen} from "../stacks/AuthStack";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useAuth} from "../hooks/App/useAuth";
import {Pressable, Text, View} from "react-native";
import {useAppDispatch} from "../redux/store";
import {userThunks} from "../redux/thunks/userThunks";
import {ContentStackScreen} from "../stacks/ContentStack";

const MainStack = createNativeStackNavigator()

export const AppContainer = () => {
 const {isAuth, load} = useAuth()
 if (load) return null
 return (
  <NavigationContainer>
   <MainStack.Navigator>
    {!isAuth && <MainStack.Screen
        options={{headerShown: false}}
        name={AUTH_STACK_SCREEN}
        component={AuthStackScreen}
    />}
    {isAuth && <MainStack.Screen
        options={{headerShown: false}}
        name={CONTENT_STACK_SCREEN}
        component={ContentStackScreen}
    />}
   </MainStack.Navigator>
  </NavigationContainer>
 )
}

const Al = () => {
 const dispatch = useAppDispatch()
 const logout = () => dispatch(userThunks.logout())
 return (
  <Pressable style={{marginTop: 100}} onPress={logout}>
   <Text>
    dsajdlasj
   </Text>
  </Pressable>
 )
}