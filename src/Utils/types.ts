export type TValidateFormEntry = (value: string) => string | null;

export type TValidatorFn = (value: string) => boolean;

export type TSignupFormData = {
  email: string;
  password: string;
  number: string;
  cart: number[];
};

export type THandleSignup = (values: TSignupFormData) => void;
