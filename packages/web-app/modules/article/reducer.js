import * as ACTIONS from "./actions";

export const defaultState = {
  title: null,
  description: null,
  body: null,
  comments: []
};

export const REDUCER_NAME = "ARTICLE";

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ARTICLE_REQUEST:
      return defaultState;
    case ACTIONS.FETCH_ARTICLE_SUCCESS:
      return action.payload;
    case ACTIONS.SUBMIT_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      };
    default:
      return state;
  }
};
