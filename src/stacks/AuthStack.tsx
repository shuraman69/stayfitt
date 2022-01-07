import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AUTH_SCREEN } from '../helpers/screens'
import { AuthScreen } from '../screens/AuthScreen/AuthScreen'

const AuthStack = createNativeStackNavigator()
export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={AUTH_SCREEN}
        component={AuthScreen}
      />
    </AuthStack.Navigator>
  )
}
