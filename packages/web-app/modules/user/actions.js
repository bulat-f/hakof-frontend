import {
  INIT_CURRENT_USER,
  REGISTER_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
} from "./actionTypes";

export const initCurrentUser = () => ({ type: INIT_CURRENT_USER });

export const register = (creds) => ({
  type: REGISTER_REQUEST,
  payload: creds,
});

export const login = (creds) => ({ type: LOGIN_REQUEST, payload: creds });

export const logout = () => ({ type: LOGOUT_REQUEST });
