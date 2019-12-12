import get from "lodash/get";
import { REDUCER_NAME } from "./reducer";

export const getCurrentUser = state => get(state, REDUCER_NAME);
