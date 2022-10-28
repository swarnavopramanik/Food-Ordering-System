import axios from "axios";

// redux types
import { LOG_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT } from "./auth.type";

export const logIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: "http://localhost:4000/auth/login",
      data: { credentials: userData },
    });

    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    // window.location.reload();

    return dispatch({ type: LOG_IN, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: "http://localhost:4000/auth/signup",
      data: { credentials: userData },
    });

    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${User.data.token}`;

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("zomatoUser");

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const googleAuth = (token) => async (dispatch) => {
  try {
    localStorage.setItem("zomatoUser", JSON.stringify({ token }));

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return dispatch({ type: GOOGLE_AUTH, payload: { token } });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};