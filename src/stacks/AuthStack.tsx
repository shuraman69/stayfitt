import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Text, View} from "react-native";
import {StayFittSVG} from "../svg/Auth/Frame";
import {APP_GRAY} from "../helpers/colors";
import {Container} from "../components/Container";
import {VideoContainer} from "../components/VideoContainer";

const AuthStack = createNativeStackNavigator()
export const AuthStackScreen = () => {
 return (
  <VideoContainer>
   {/*<View style={{backgroundColor: APP_GRAY}}>*/}
   {/* <StayFittSVG/>*/}
   {/* <Text>*/}
   {/*  AUTH*/}
   {/* </Text>*/}
   {/*</View>*/}
  </VideoContainer>
 )
}