import {AUTH_FIELDS} from "./fields";
import {useFields} from "../App/useFields";
import {useToggle} from "../general/useToggle";
import {getObjectKeys} from "../../helpers/getObjectKeys";
import {authConfig} from "../../helpers/authConfig";
import {useAppDispatch} from "../../redux/store";
import {userThunks} from "../../redux/thunks/userThunks";

export const useAuthForm = () => {
 const dispatch = useAppDispatch()
 const {toggle, state: securePass} = useToggle(true)
 const defaultState = {
  [AUTH_FIELDS.EMAIL.name]: AUTH_FIELDS.EMAIL,
  [AUTH_FIELDS.PASSWORD.name]: AUTH_FIELDS.PASSWORD
 }
 const [changeHandler, fields, onSubmitValidate, clearFields] = useFields(defaultState)
 const getFormValues = (fields: object) => {
  const result = {}
  const keys = getObjectKeys(fields)
  // @ts-ignore
  keys.forEach(key => result[key] = fields[key].value)
  return result
 }
 const signIn = () => {
  if (!onSubmitValidate()) return
  const data = {...authConfig, ...getFormValues(fields)}
  dispatch(userThunks.token(data))
  const a = 'dev-17-3@mediabc.ru'
 }

 const buttons = [
  {title: 'Войти', onPress: () => signIn(), transparent: false},
  {title: 'Забыли пароль?', onPress: () => null, transparent: true},
  {title: 'Войти с кодом', onPress: () => null, transparent: true}
 ]
 return {changeHandler, buttons, fields, onSubmitValidate, securePass, clearFields, toggle}
}