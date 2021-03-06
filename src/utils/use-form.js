import { useCallback, useMemo, useState } from "react";


/**
 *
 * @param valueOnStart  complex object with the same structure as the form
 * {
 *     username: "",
 *     password:"",
 * }
 * @return {unknown[]}
 */
export function useForm(valueOnStart) {
    const [formValues, setValue] = useState(valueOnStart);

    const handleChange = useCallback((event) => {
        const {name, value} = event.target;
        setValue((oldState) => {
            return {
                ...oldState,
                [name]: value,
            }
        })
    }, [])

    const inputProps = useMemo(() => {
        const props = {};
        for (let name in valueOnStart) {
            props[name] = {
                value: formValues[name],
                name: name,
                onChange: handleChange
            }
        }
        return props
    }, [handleChange, formValues])

    return [
        formValues,
        inputProps
    ]
}

