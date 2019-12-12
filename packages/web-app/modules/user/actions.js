import * as types from "./actionTypes";

const LOCAL_STORAGE_ITEM = "currentUser";

export const initCurrentUser = () => {
  const currentUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM));

  return {
    type: types.SET_CURRENT_USER,
    payload: currentUser || null
  };
};

export const setCurrentUser = payload => {
  localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(payload));

  return {
    type: types.SET_CURRENT_USER,
    payload
  };
};

export const removeCurrentUser = () => {
  localStorage.removeItem(LOCAL_STORAGE_ITEM);

  return { type: types.REMOVE_CURRENT_USER };
};
