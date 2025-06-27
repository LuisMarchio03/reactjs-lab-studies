import React, { useMemo, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "./schema";
import { Label, Select, Input } from "semantic-ui-react";

const AddressForm = () => {
  const [data, setData] = useState({});

  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  function onBlurCep(ev, setFieldValue) {
    const cep = ev.target.value.replace(/[^0-9]/g, "");

    //Retirar mask input cep
    //replace(/[^0-9]/g, ""); Retira todos os caracteres q não forem números

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("uf", data.uf);
      });
  }

  useMemo(() => {
    console.log(data);
  }, [data]);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      validateOnMount
      initialValues={{
        name: "",
        email: "",
      }}
      render={({ values, errors, touched, isValid, setFieldValue }) => (
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            setData(values);
          }}
        >
          <div>
            <label>CEP</label>
            <Field
              name="cep"
              type="text"
              as={Input}
              onBlur={(ev) => onBlurCep(ev, setFieldValue)}
            />
            <ErrorMessage name="cep" />
          </div>
          <div>
            <label>Logradouro</label>
            <Field name="logradouro" type="text" as={Input} />
            <ErrorMessage name="logradouro" />
          </div>
          <div>
            <label>Número</label>
            <Field name="numero" type="text" as={Input} />
            <ErrorMessage name="numero" />
          </div>
          <div>
            <label>Bairro</label>
            <Field name="bairro" type="text" as={Input} />
            <ErrorMessage name="bairro" />
          </div>
          <div>
            <label>Cidade</label>
            <Field name="cidade" type="text" as={Input} />
            <ErrorMessage name="cidade" />
          </div>
          <div>
            <label>Estado</label>
            <Field component="select" name="uf" as={Select}>
              <option value={null}>Selecione o Estado</option>
              <option value="sp">São Paulo</option>
              <option value="go">Goiás</option>
            </Field>
          </div>

          <button type="submit">Enviar</button>
        </Form>
      )}
    />
  );
};

export default AddressForm;
