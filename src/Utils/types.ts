export type TValidateFormEntry = (value: string) => string | null;

export type TValidatorFn = (value: string) => boolean;

export type TLoginFormData = {
  email: string;
  password: string;
};

export type TSignupFormData = TLoginFormData & {
  number: string;
};

export type THandleLogin = (values: TLoginFormData) => void;

export type THandleSignup = (values: TSignupFormData) => void;
