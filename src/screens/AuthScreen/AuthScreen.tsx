import {VideoContainer} from "../../components/VideoContainer";
import {Button, Text} from "react-native";
import {Input} from "./components/Input";
import {AUTH_FIELDS} from "../../hooks/AuthScreen/fields";
import {useAuthForm} from "../../hooks/AuthScreen/useAuthForm";

export const AuthScreen = () => {
 const {fields, clearFields, toggle, securePass, onSubmitValidate, changeHandler} = useAuthForm()
 return (
  <VideoContainer>
   <Text>Войти</Text>
   <Input
    name={AUTH_FIELDS.EMAIL.name}
    onChange={changeHandler}
    value={fields[AUTH_FIELDS.EMAIL.name]?.value || ''}
    placeholder={AUTH_FIELDS.EMAIL.placeholder}
    containerStyles={{marginBottom:10}}
   />
   <Input
    name={AUTH_FIELDS.PASSWORD.name}
    onChange={changeHandler}
    value={fields[AUTH_FIELDS.PASSWORD.name]?.value || ''}
    placeholder={AUTH_FIELDS.PASSWORD.placeholder}
    secureText={securePass}
    type={AUTH_FIELDS.PASSWORD.type}
    containerStyles={{marginBottom:10}}
   >

   </Input>
   <Button title={'Submit'} onPress={() => {
    onSubmitValidate()
   }}/>
  </VideoContainer>
 )
}