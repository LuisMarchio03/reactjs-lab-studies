import React from "react";
import usePersistedState from "../../utils/usePersistedState";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Form } from "../Form";
import { Field } from "../Field";
import { Button } from "../Button";

export const FormNew = () => {
  const [name, setName] = usePersistedState('name', '')
  const [email, setEmail] = usePersistedState('email', '')

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    email: yup.string().email().required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const newUser = (user: any) => {
    setName(user.name);
    setEmail(user.email);
  };

  console.log(name)
  console.log(email)

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Text label="Nome..." name="name" type="text" register={register} />
      {errors.name?.message}
      <Field.Text label="Email..." name="email" type="email" register={register} />
      {errors.email?.message}

      <Button type="submit">Enviar</Button>
    </Form>
  )
}