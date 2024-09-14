import * as Yup from "yup";

const phoneRegExp = /^\(\d{2}\) \d{4,5}-\d{4}$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "O nome precisa ter pelo menos 2 caracteres")
    .required("Nome é obrigatório"),
  email: Yup.string()
    .email("Endereço de email inválido")
    .required("Email é obrigatório"),
  phone: Yup.string()
    .matches(
      phoneRegExp,
      "O telefone deve estar no formato (99) 99999-9999 ou (99) 9999-9999"
    )
    .required("Telefone é obrigatório"),
});
