import { useState } from 'react';

export function useForm(values = {}) {
  const [inputValues, setInputValues] = useState(values);

  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value
    });
  };

  const setInputs = (inputs = {}) => {
    setInputValues(prev => ({ ...prev, ...inputs }));
  };

  return {
    handleInputChange,
    setInputs,
    inputValues
  };
}