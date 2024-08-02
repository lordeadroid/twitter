import { FORM_ERROR, VALID } from "./constant";
import { TValidateFormEntry, TValidatorFn } from "./types";

const isValidEmail: TValidatorFn = (value) => VALID.email.test(value);

const validateEmail: TValidateFormEntry = (value) => {
  return isValidEmail(value) ? null : FORM_ERROR.email;
};

const isValidPassword: TValidatorFn = (value) => value.length < VALID.password;

const validatePassword: TValidateFormEntry = (value) => {
  return isValidPassword(value) ? FORM_ERROR.password : null;
};

const isValidUsername: TValidatorFn = (value) => value.length < VALID.username;

const validateUsername: TValidateFormEntry = (value) => {
  return isValidUsername(value) ? FORM_ERROR.username : null;
};

const formValidator = {
  email: validateEmail,
  password: validatePassword,
  username: validateUsername,
};

export default formValidator;
