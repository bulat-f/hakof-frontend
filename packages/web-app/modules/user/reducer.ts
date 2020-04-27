import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";
import { IAction } from "../types";

export const REDUCER_NAME = "USER";

export const reducer = (state = null, action: IAction) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};
