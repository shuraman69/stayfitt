import {VideoContainer} from "../../components/VideoContainer";
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Input} from "./components/Input";
import {AUTH_FIELDS} from "../../hooks/AuthScreen/fields";
import {useAuthForm} from "../../hooks/AuthScreen/useAuthForm";
import {Button} from "./components/Button";
import {EyeSVG} from "./components/Eye";
import {WHITE} from "../../helpers/colors";

export const AuthScreen = () => {
 const {fields, toggle, buttons, securePass, changeHandler} = useAuthForm()
 return (
  <VideoContainer>
   <View style={styles.contentContainer}>
    <Text style={styles.title}>Войти</Text>
    <Input
     name={AUTH_FIELDS.EMAIL.name}
     onChange={changeHandler}
     value={fields[AUTH_FIELDS.EMAIL.name]?.value || ''}
     placeholder={AUTH_FIELDS.EMAIL.placeholder}
     containerStyles={{marginBottom: 10}}
    />
    <Input
     name={AUTH_FIELDS.PASSWORD.name}
     onChange={changeHandler}
     value={fields[AUTH_FIELDS.PASSWORD.name]?.value || ''}
     placeholder={AUTH_FIELDS.PASSWORD.placeholder}
     secureText={securePass}
     type={AUTH_FIELDS.PASSWORD.type}
     containerStyles={{marginBottom: 10}}
    >
     <TouchableOpacity onPress={() => toggle()}>
      <EyeSVG/>
     </TouchableOpacity>
    </Input>
    {buttons.map((button, i) =>
     <Button
      key={i}
      title={button.title}
      onPress={button.onPress}
      transparent={button.transparent}
     />)}
   </View>
  </VideoContainer>
 )
}

const styles = StyleSheet.create({
 contentContainer: {
  paddingHorizontal: 20
 },
 title: {
  fontWeight: '700',
  color: WHITE,
  fontSize: 34,
  marginBottom: 12
 }
})