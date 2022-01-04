import {AUTH_FIELDS} from "./fields";
import {useFields} from "../App/useFields";
import {useToggle} from "../general/useToggle";

export const useAuthForm = () => {
 const {toggle, state: securePass} = useToggle(true)
 const defaultState = {
  [AUTH_FIELDS.EMAIL.name]: AUTH_FIELDS.EMAIL,
  [AUTH_FIELDS.PASSWORD.name]: AUTH_FIELDS.PASSWORD
 }
 const [changeHandler, fields, onSubmitValidate, clearFields] = useFields(defaultState)

 const signIn = () => {
  if (!onSubmitValidate()) return
 }

 const buttons = [
  {title: 'Войти', onPress: () => signIn(), transparent: false},
  {title: 'Забыли пароль?', onPress: () => null, transparent: true},
  {title: 'Войти с кодом', onPress: () => null, transparent: true}
 ]
 return {changeHandler, buttons, fields, onSubmitValidate, securePass, clearFields, toggle}
}