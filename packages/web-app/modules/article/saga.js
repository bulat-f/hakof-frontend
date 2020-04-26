import { takeLatest, put, fork } from "redux-saga/effects";
import { getArticle } from "@hakof/api";

import * as ACTIONS from "./actions";

function* fetchArticleSaga({ payload: { slug } }) {
  const ariticle = yield getArticle(slug);
  yield put(ACTIONS.fetchArticleSuccess(ariticle));
}

function* submitCommentSaga({ payload: { slug, comment } }) {
  const addedComment = yield postComment(slug, comment);
  yield put(ACTIONS.submitCommentSuccess(addedComment));
}

function* watchArticleFetching() {
  yield takeLatest(ACTIONS.FETCH_ARTICLE_REQUEST, fetchArticleSaga);
}

function* watchCommentSubmitting() {
  yield takeLatest(ACTIONS.SUBMIT_COMMENT_REQUEST, submitCommentSaga);
}

function* saga() {
  yield fork(watchArticleFetching);
  yield fork(watchCommentSubmitting);
}

export { saga };
