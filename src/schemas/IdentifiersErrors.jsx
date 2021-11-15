import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Votre adresse e-mail est incorrecte, veuillez la ressaisir.")
    .required("Veuillez saisir votre email."),
  confirmEmail: Yup.string()
    .oneOf(
      [Yup.ref("email"), null],
      "Cette adresse e-mail n'est pas identique à l'adresse saisie."
    )
    .required("Veuillez saisir votre adresse mail de confirmation."),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/,
      "Le mot de passe doit contenir entre 8 et 32 caractères dont au moins une lettre majuscule, minuscule et un chiffre."
    )
    .required("Veuillez entrer un mot de passe"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Ce mot de passe n'est pas identique au mot de passe saisi."
    )
    .required("Veuillez saisir votre confirmation du mot de passe.")
});
