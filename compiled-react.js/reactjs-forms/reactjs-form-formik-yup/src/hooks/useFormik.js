import { useState } from "react";

export const useFormik = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues);

  console.log();

  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    const value = event.target.value;

    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  return {
    values: values,
    handleChange,
  };
};
