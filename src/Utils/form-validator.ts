import { FORM_ERROR, MIN_LENGTH } from "./constant";
import { TValidateFormEntry, TValidatorFn } from "./types";

const isValidEmail: TValidatorFn = (value) => /^\S+@\S+$/.test(value);

const validateEmail: TValidateFormEntry = (value) => {
  return isValidEmail(value) ? null : FORM_ERROR.email;
};

const isValidPassword: TValidatorFn = (value) =>
  value.length < MIN_LENGTH.password;

const validatePassword: TValidateFormEntry = (value) => {
  return isValidPassword(value) ? FORM_ERROR.password : null;
};

const isValidUsername: TValidatorFn = (value) =>
  value.length < MIN_LENGTH.username;

const validateUsername: TValidateFormEntry = (value) => {
  return isValidUsername(value) ? FORM_ERROR.username : null;
};

const signupFormValidator = {
  email: validateEmail,
  password: validatePassword,
};

const loginFormValidator = {
  username: validateUsername,
  password: validatePassword,
};

export { signupFormValidator, loginFormValidator };
