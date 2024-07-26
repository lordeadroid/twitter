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

export type TLoginStore = {
  loginStatus: boolean;
  updateLoginStatus: () => void;
  email: string;
  updateEmail: (email: string) => void;
  resetEmail: () => void;
};

export type TTweet = {
  username: string;
  message: string;
  date: string;
  likes?: number;
};
