import React, { forwardRef } from "react";
import { Input } from "./styles";

export const InputMaskCep = forwardRef(
  ({ maskOptions, label, ...inputProps }, ref) => {
    return (
      <>
        <label>{label}</label>
        <Input mask="99999-999" {...inputProps} />
      </>
    );
  }
);
