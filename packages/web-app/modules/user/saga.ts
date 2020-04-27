import { takeLatest, takeLeading, call, put, all } from "redux-saga/effects";
import { login, register } from "@hakof/api";
import {
  INIT_CURRENT_USER,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "./actionTypes";

interface IAction {
  type: string;
  payload: any;
}

function* handleInit() {
  const userString = yield call([localStorage, "getItem"], "currentUser");
  const user = JSON.parse(userString);
  if (user) yield put({ type: LOGIN_SUCCESS, payload: user });
}

function* watchInit() {
  yield takeLatest(INIT_CURRENT_USER, handleInit);
}

function* handleRegister(action: IAction) {
  try {
    const user = yield call(register, action.payload);
    yield call([localStorage, "setItem"], "currentUser", JSON.stringify(user));
    yield put({ type: REGISTER_SUCCESS, payload: user });
    window.location.href = "/";
  } catch (error) {
    yield put({ type: REGISTER_FAILURE, payload: error });
  }
}

function* watchRegister() {
  yield takeLatest(REGISTER_REQUEST, handleRegister);
}

function* handleLogin(action: { type: string; payload: any }) {
  try {
    const user = yield call(login, action.payload);
    yield call([localStorage, "setItem"], "currentUser", JSON.stringify(user));
    yield put({ type: LOGIN_SUCCESS, payload: user });
    window.location.href = "/";
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}

function* handleLogout() {
  yield call([localStorage, "removeItem"], "currentUser");
  yield put({ type: LOGOUT_SUCCESS });
}

function* watchLogout() {
  yield takeLeading(LOGOUT_REQUEST, handleLogout);
}

function* saga() {
  yield all([watchInit(), watchRegister(), watchLogin(), watchLogout()]);
}

export { saga };
