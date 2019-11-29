import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import {
  REDUCER_NAME as ARTICLE_REDUCER_NAME,
  reducer as articleReducer
} from "./article/reducer";
import { saga as articleSaga } from "./article/saga";

export const rootReducer = combineReducers({
  [ARTICLE_REDUCER_NAME]: articleReducer
});

function* rootSaga() {
  yield all([articleSaga()]);
  // code after all-effect
}

export { rootSaga };
