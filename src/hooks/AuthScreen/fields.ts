import {validateEmail} from "../../helpers/validation/validateEmail";
import {validateEmptyValue} from "../../helpers/validation/validateEmptyValue";
import {validatePassword} from "../../helpers/validation/validatePassword";
import {TextInputIOSProps} from "react-native";

type FieldType = {
 name: string
 validate: boolean
 placeholder: string
 type: TextInputIOSProps['textContentType']
 check:( {value, fields}:{value:string, fields:any} )=>any
 afterCheckEvent:(value: string, fieldName: string) => any
 needShowMessage:boolean
 isValid:boolean
 value:string
}

type AuthFieldsType = {
 EMAIL: FieldType
 PASSWORD:FieldType
}

export const AUTH_FIELDS :AuthFieldsType= {
 EMAIL: {
  name: 'username',
  validate: true,
  placeholder: 'Ваша почта',
  type: 'none',
  check: validateEmail,
  afterCheckEvent: (value: string, fieldName: string) =>
   validateEmptyValue(value, fieldName, () => alert('Поле Email заполнено неверно')
   ),
  needShowMessage: true,
  isValid: false,
  value: '',
 },
 PASSWORD: {
  name: 'password',
  validate: true,
  placeholder: 'Пароль',
  type: 'password',
  check: validatePassword,
  afterCheckEvent: (value: string, fieldName: string) =>
   validateEmptyValue(value, fieldName, () => alert('Поле Пароль заполнено неверно')
   ),
  needShowMessage: true,
  isValid: false,
  value: '',
 }

}