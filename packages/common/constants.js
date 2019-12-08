export const theme = {
  colors: {
    //simple colors
    gray: "#6c757d",
    // named colors
    success: "#28a745",
    primary: "#c6aa76",
    info: "#138496",
    warning: "#e0a800",
    error: "#e74c3c",

    text: "#212529",
    invertedText: "#fff"
  },
  mediaSizes: {
    xsMin: 480,
    smMin: 768,
    mdMin: 992,
    lgMin: 1200,

    xsMax: 767,
    smMax: 991,
    mdMax: 1199
  },
  grid: {
    columns: 12,
    gutterWidth: 30
  },
  borderRadius: 2,
  basicFont: '"Open Sans", sans-serif',
  containerMaxWidth: 1140,
  button: {
    // size
    large: {
      paddingHorizontal: 18,
      paddingVertical: 12,
      fontSize: 18,
      minWidth: 120,
      borderWidth: 2,
      borderRadius: 6
    },
    medium: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      fontSize: 14,
      minWidth: 100,
      borderWidth: 1,
      borderRadius: 4
    },
    small: {
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
  }
};
