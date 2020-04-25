import { text, lightGray } from "./colors";
import { sizes } from "./constants";

export const input = {
  color: text,
  borderColor: lightGray,

  [sizes.LARGE]: {
    height: 42,
    paddingHorizontal: 8,
    borderRadius: 2,
    borderWidth: 1,
    fontSize: 18
  },
  [sizes.MEDIUM]: {
    height: 32,
    paddingHorizontal: 8,
    borderRadius: 2,
    borderWidth: 1,
    fontSize: 14
  },
  [sizes.SMALL]: {
    height: 24,
    paddingHorizontal: 8,
    borderRadius: 2,
    borderWidth: 1,
    fontSize: 12
  }
};

export const label = {
  color: text,

  [sizes.LARGE]: {
    fontSize: 18
  },
  [sizes.MEDIUM]: {
    fontSize: 14
  },
  [sizes.SMALL]: {
    fontSize: 12
  },

  // directions
  column: {
    marginBottom: 8,
    marginRight: 0
  },
  row: {
    marginBottom: 0,
    marginRight: 8
  }
};

export const inputWrapper = {};
