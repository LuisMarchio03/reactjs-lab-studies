import React, { forwardRef } from "react";
import { Input } from "./styles";

export const InputMaskPhone = forwardRef(
  ({ maskOptions, label, ...inputProps }, ref) => {
    return (
      <>
        <label>{label}</label>
        <Input mask="(99) 9999-9999" {...inputProps} />
      </>
    );
  }
);
