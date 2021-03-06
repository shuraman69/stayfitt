import {Text, View} from "react-native";
import {BLACK, WHITE} from "../../../helpers/colors";
import {Button} from "../../AuthScreen/components/Button";
import {useAppDispatch} from "../../../redux/store";
import {setToken} from "../../../redux/slices/userSlice";

export const EmptyScreen = () => {
 const dispatch = useAppDispatch()
 const logout = () => {
  dispatch(setToken({data: null}))
 }
 return (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: BLACK}}>
   <Text style={{color: WHITE}}>
    Экран в разработке
   </Text>
   <Button transparent  title={'Выйти'} onPress={logout}/>
  </View>
 )
}