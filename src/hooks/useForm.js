import { useState } from 'react';

export function useForm(values = {}) {
    const [inputValues, setInputValues] = useState(values);

    const handleInputChange = ({ target }) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value
        });
    };

    return {
        handleInputChange,
        inputValues
    };
}