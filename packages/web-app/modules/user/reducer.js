import * as types from "./actionTypes";

export const REDUCER_NAME = "USER";

export const reducer = (state = null, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return action.payload;
    case types.REMOVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};
