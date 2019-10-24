export const getMeasureUnit = value =>
  typeof value === "number" ? `${value}px` : value;
