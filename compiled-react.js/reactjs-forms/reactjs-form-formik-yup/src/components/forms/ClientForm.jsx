import React from "react";
import { Button, Input } from "semantic-ui-react";
import { useFormik } from "../../hooks/useFormik";

function ClientForm() {
  const formik = useFormik({
    initialValues: {
      cpf: null,
      phone: null,
      email: null,
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formik.values);
      }}
    >
      <Input
        type="text"
        text="CPF"
        placeholder="Digite o cpf do cliente"
        name="cpf"
        id="cpf"
        onChange={formik.handleChange}
        value={formik.values.cpf}
      />
      <Input
        type="email"
        text="Email"
        placeholder="Digite o email do cliente"
        name="email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        type="text"
        text="Telefone"
        placeholder="Digite o telefone do cliente"
        name="phone"
        id="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <Button type="submit">Enviar</Button>
    </form>
  );
}

export default ClientForm;
