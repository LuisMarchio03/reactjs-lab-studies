import React, { forwardRef } from "react";
import { Input } from "./styles";

export const InputMaskCnpj = forwardRef(
  ({ maskOptions, label, ...inputProps }, ref) => {
    return (
      <>
        <label>{label}</label>
        <Input mask="99.999.999/9999-99" {...inputProps} />
      </>
    );
  }
);
