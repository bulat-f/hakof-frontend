import { sizes } from './constants'

export const button = {
  // size
  [sizes.LARGE]: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 18,
    minWidth: 120,
    borderWidth: 2,
    borderRadius: 6
  },
  [sizes.MEDIUM]: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    minWidth: 100,
    borderWidth: 1,
    borderRadius: 4
  },
  [sizes.SMALL]: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 12,
    minWidth: 80,
    borderWidth: 1,
    borderRadius: 2
  },

  // colorScheme
  primary: {
    main: "primary",
    text: "invertedText"
  },
  success: {
    main: "success",
    text: "invertedText"
  },
  info: {
    main: "info",
    text: "invertedText"
  },
  warning: {
    main: "warning",
    text: "invertedText"
  },
  error: {
    main: "error",
    text: "invertedText"
  },

  // style
  solid: {
    backgroundColor: "main",
    borderColor: "main",
    color: "text"
  },
  hollow: {
    backgroundColor: "transparent",
    borderColor: "main",
    color: "main"
  }
};
