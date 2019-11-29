import get from "lodash/get";
import { REDUCER_NAME, defaultState } from "./reducer";

export const getArticle = state => get(state, [REDUCER_NAME], defaultState);

export const getArticleUi = state => get(state, [REDUCER_NAME, "ui"], {});
