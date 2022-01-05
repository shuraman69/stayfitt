import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AUTH_SCREEN, CONTENT_SCREEN} from "../helpers/screens";
import {AuthScreen} from "../screens/AuthScreen/AuthScreen";
import {ContentScreen} from "../screens/ContentScreen/ContentScreen";
import {APP_BLACK, APP_GRAY, WHITE} from "../helpers/colors";

const ContentStack = createNativeStackNavigator()
export const ContentStackScreen = () => {
 return (
  <ContentStack.Navigator>
   <ContentStack.Screen
    options={{headerShown:false}}
    name={CONTENT_SCREEN}
    component={ContentScreen}
   />
  </ContentStack.Navigator>
 )
}