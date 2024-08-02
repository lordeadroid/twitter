export type TValidateFormEntry = (value: string) => string | null;

export type TValidatorFn = (value: string) => boolean;

export type TLoginFormData = {
  email: string;
  password: string;
};

export type TSignupFormData = TLoginFormData & {
  email: string;
};

export type THandleLogin = (values: TLoginFormData) => void;

export type THandleSignup = (values: TSignupFormData) => void;

export type TLoginStore = {
  UID: string;
  updateUID: (uid: string) => void;
  username: string;
  updateUsername: (username: string) => void;
};

export type TTweet = {
  username: string;
  message: string;
  timestamp: number;
};
