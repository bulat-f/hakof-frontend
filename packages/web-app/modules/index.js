import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import {
  REDUCER_NAME as ARTICLE_REDUCER_NAME,
  reducer as articleReducer,
} from "./article/reducer";
import { saga as articleSaga } from "./article/saga";

import {
  REDUCER_NAME as USER_REDUCER_NAME,
  reducer as userReducer,
} from "./user/reducer";
import { saga as userSaga } from "./user/saga";

export const rootReducer = combineReducers({
  [ARTICLE_REDUCER_NAME]: articleReducer,
  [USER_REDUCER_NAME]: userReducer,
});

function* rootSaga() {
  yield all([articleSaga(), userSaga()]);
  // code after all-effect
}

export { rootSaga };
