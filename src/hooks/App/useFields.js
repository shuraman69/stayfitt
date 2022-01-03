import React, {useCallback, useEffect, useState} from 'react'

export const useFields = (defaultState) => {
    const [fields, setFields] = useState(defaultState)
    const clearFields = () => setFields(defaultState)

    const changeHandler = useCallback((value, name) => {
        const newFieldState = fields[name]
        if (fields[name].validate) {
            newFieldState.isValid = fields[name].check({value, fields})
        }
        setFields({...fields, [name]: {...newFieldState, value}})
    }, [fields])

    const onSubmitValidate = () => {
        let result = true
        for (const key in fields) {
            if (typeof fields[key].isValid !== 'undefined' && !fields[key].isValid) {
                result = false
                if (fields[key].needShowMessage) {
                    return fields[key].afterCheckEvent(fields[key].value, fields[key].placeholder)
                }
            }
        }
        return result
    }
    return [changeHandler, fields, onSubmitValidate, clearFields]
}
