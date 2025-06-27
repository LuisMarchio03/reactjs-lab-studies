import * as Yup from "yup";

export default Yup.object().shape({
  cep: Yup.string().min(8).required(),
  logradouro: Yup.string().required(),
  numero: Yup.string().min(1).required(),
});
