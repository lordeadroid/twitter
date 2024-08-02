export const EMPTYSTRING = "";

export const PATH = {
  home: "/",
  login: "/login",
  signup: "/signup",
} as const;

export const SIZE = {
  extraSmall: "xs",
  small: "sm",
  medium: "md",
  large: "lg",
  extraLarge: "lg",
} as const;

export const INIT_LOGIN_FORM_VALUES = {
  username: EMPTYSTRING,
  password: EMPTYSTRING,
};

export const INIT_SIGNUP_FORM_VALUES = {
  ...INIT_LOGIN_FORM_VALUES,
  email: EMPTYSTRING,
};

export const FORM_ERROR = {
  email: "Invalid email",
  password: "Password must have atleast 6 characters",
  username: "Username must have atleast 3 characters",
} as const;

export const VALID = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,
  password: 6,
  username: 3,
} as const;

export const STORE = {
  login: "login-store",
  tweet: "tweet-store",
} as const;

export const DB = { tweets: "tweets" };

export const TWEET_LIMIT = 140;

export const FORM_FIELD = {
  username: "username",
  email: "email",
  password: "password",
} as const;
