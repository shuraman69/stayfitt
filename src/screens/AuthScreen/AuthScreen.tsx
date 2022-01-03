import {VideoContainer} from "../../components/VideoContainer";
import {Button, Text} from "react-native";
import {Input} from "./components/Input";
import {AUTH_FIELDS} from "../../hooks/AuthScreen/fields";
import {useAuthForm} from "../../hooks/AuthScreen/useAuthForm";

export const AuthScreen = () => {
 const {fields, clearFields, onSubmitValidate, changeHandler} = useAuthForm()
 return (
  <VideoContainer>
   <Text>Войти</Text>
   <Input
    name={AUTH_FIELDS.EMAIL.name}
    onChange={changeHandler}
    value={fields[AUTH_FIELDS.EMAIL.name]?.value || ''}
    placeholder={AUTH_FIELDS.EMAIL.placeholder}
   />
   <Input
    name={AUTH_FIELDS.PASSWORD.name}
    onChange={changeHandler}
    value={fields[AUTH_FIELDS.PASSWORD.name]?.value || ''}
    placeholder={AUTH_FIELDS.PASSWORD.placeholder}
    type={AUTH_FIELDS.PASSWORD.type}
   />
   <Button title={'Submit'} onPress={() => {
    onSubmitValidate()
   }}/>
  </VideoContainer>
 )
}