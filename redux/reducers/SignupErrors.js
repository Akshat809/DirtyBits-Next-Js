import {
  FirstNameError,
  LastNameError,
  UsernameError,
  EmailError,
  PasswordError,
  ConfirmPasswordError,
} from "../types";

let initial = {
  username: { error: false, details: "" },
  firstname: { error: false, details: "" },
  lastname: { error: false, details: "" },
  email: { error: false, details: "" },
  password: { error: false, details: "" },
  confirmPassword: { error: false, details: "" },
};

export const SignupErrorReducer = (state = initial, action) => {
  switch (action.type) {
    case FirstNameError:
      return {
        ...state,
        firstname: {
          error: action.payload.error,
          details: action.payload.details,
        },
      };
    case LastNameError:
      return {
        ...state,
        lastname: {
          error: action.payload.error,
          details: action.payload.details,
        },
      };
    case UsernameError:
      return {
        ...state,
        username: {
          error: action.payload.error,
          details: action.payload.details,
        },
      };
    case EmailError:
      return {
        ...state,
        email: { error: action.payload.error, details: action.payload.details },
      };
    case PasswordError:
      return {
        ...state,
        password: {
          error: action.payload.error,
          details: action.payload.details,
        },
      };
    case ConfirmPasswordError:
      return {
        ...state,
        confirmPassword: {
          error: action.payload.error,
          details: action.payload.details,
        },
      };
    default:
      return state;
  }
};
