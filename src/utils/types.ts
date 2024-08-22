export type TValidateFormEntry = (value: string) => string | null;

export type TValidatorFn = (value: string) => boolean;

export type TLoginFormData = {
  email: string;
  password: string;
};

export type TSignupFormData = TLoginFormData & {
  username: string;
};

export type THandleLogin = (values: TLoginFormData) => void;

export type THandleSignup = (values: TSignupFormData) => void;

export type TImages = {
  avatar: string;
  background: string;
};

export type TLoginStore = {
  UID: string;
  updateUID: (uid: string) => void;
  username: string;
  updateUsername: (username: string) => void;
  images: TImages;
  updateImages: (newImages: TImages) => void;
};

export type TTweet = {
  username: string;
  message: string;
  timestamp: number;
};
