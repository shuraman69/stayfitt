import {Text, View} from "react-native";
import {APP_BLACK, APP_GRAY, BLACK, WHITE} from "../../../helpers/colors";

export const EmptyScreen = () => {
 return (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:BLACK}}>
   <Text style={{color:WHITE}}>
    Экран в разработке
   </Text>
  </View>
 )
}