export const PATH = {
  home: "/",
  login: "/login",
} as const;

export const SIZE = {
  extraLarge: "lg",
  extraSmall: "xs",
  large: "lg",
  medium: "md",
  small: "sm",
} as const;

export const EMPTYSTRING = "";

export const INIT_SIGNUP_FORM_VALUES = {
  email: EMPTYSTRING,
  password: EMPTYSTRING,
  number: EMPTYSTRING,
  cart: <number[]>[],
};

export const FORM_ERROR = {
  email: "Invalid email",
  password: "Password must have at least 3 characters",
  username: "Username must have at least 3 characters",
  nationality: "Select one of the option",
} as const;

export const MIN_LENGTH = {
  password: 6,
} as const;
