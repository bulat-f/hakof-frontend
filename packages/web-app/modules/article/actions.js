export const FETCH_ARTICLE_REQUEST = "FETCH_ARTICLE_REQUEST";
export const FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS";
export const FETCH_ARTICLE_FAILURE = "FETCH_ARTICLE_FAILURE";

export const FETCH_ARTICLE_COMMENTS_REQUEST = "FETCH_ARTICLE_COMMENTS_SUCCESS";
export const FETCH_ARTICLE_COMMENTS_SUCCESS = "FETCH_ARTICLE_COMMENTS_SUCCESS";
export const FETCH_ARTICLE_COMMENTS_FAILURE = "FETCH_ARTICLE_COMMENTS_SUCCESS";

export const SUBMIT_COMMENT_REQUEST = "SUBMIT_COMMENT_REQUEST";
export const SUBMIT_COMMENT_SUCCESS = "SUBMIT_COMMENT_SUCCESS";
export const SUBMIT_COMMENT_FAILURE = "SUBMIT_COMMENT_FAILURE";

// actions
export const fetchArticle = slug => ({
  type: FETCH_ARTICLE_REQUEST,
  payload: { slug }
});

export const submitComment = (slug, comment) => ({
  type: SUBMIT_COMMENT_REQUEST,
  payload: { slug, comment }
});

export const fetchArticleSuccess = payload => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload
});

export const submitCommentSuccess = payload => ({
  type: SUBMIT_COMMENT_SUCCESS,
  payload
});