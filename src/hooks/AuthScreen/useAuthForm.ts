import {AUTH_FIELDS} from "./fields";
import {useFields} from "../App/useFields";

export const useAuthForm = () => {
 const defaultState = {
  [AUTH_FIELDS.EMAIL.name]: AUTH_FIELDS.EMAIL
 }
 const [changeHandler, fields, onSubmitValidate, clearFields] = useFields(defaultState)

 return {changeHandler, fields, onSubmitValidate, clearFields}
}