import * as ACTIONS from "./actions";

export const defaultState = {
  title: '',
  description: '',
  body: '',
  comments: []
};

export const REDUCER_NAME = "ARTICLE";

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_ARTICLE_REQUEST: {
      const { slug } = action.payload;
      return slug === state.slug ? state : defaultState;
    }
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
