import React from "react";

import { Label } from "./Label";
import { Content } from "./Content";
import { Input } from "./Input";

const Text = ({label, type, name, register}: any) => {
  return (
    <Label>
      <Content>{label}</Content>
      <Input type={type} name={name} {...register(`${name}`)} />
    </Label>
  )
}

export const Field = {
  Text,
}