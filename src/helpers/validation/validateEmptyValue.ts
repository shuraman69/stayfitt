export const validateEmptyValue = (value: string, fieldName: string, cb: () => any = () => null) =>
 value.length < 1 ? alert(`Заполните поле ${fieldName}`) : cb()
