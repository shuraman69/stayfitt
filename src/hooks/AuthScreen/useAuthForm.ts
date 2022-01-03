import {AUTH_FIELDS} from "./fields";
import {useFields} from "../App/useFields";
import {useToggle} from "../general/useToggle";

export const useAuthForm = () => {
 const {toggle,state:securePass} = useToggle(true)
 const defaultState = {
  [AUTH_FIELDS.EMAIL.name]: AUTH_FIELDS.EMAIL,
  [AUTH_FIELDS.PASSWORD.name]:AUTH_FIELDS.PASSWORD
 }
 const [changeHandler, fields, onSubmitValidate, clearFields] = useFields(defaultState)

 return {changeHandler, fields, onSubmitValidate, securePass, clearFields, toggle}
}