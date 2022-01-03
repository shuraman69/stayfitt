export const validateEmail = ({value}: { value: string }): boolean => {
 const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
 return emailReg.test(value)
}
