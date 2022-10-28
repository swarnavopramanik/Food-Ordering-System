import { LOG_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT } from "./auth.type";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        ...action.payload,
      };
    case SIGN_UP:
      return {
        ...state,
        ...action.payload,
      };
    case SIGN_OUT:
      return {};
    case GOOGLE_AUTH:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;