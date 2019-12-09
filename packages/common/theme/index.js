import { button } from "./button";
import { input, label } from "./input";
import * as COLORS from "./colors";

export const theme = {
  colors: COLORS,
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

  button,
  input,
  label
};
