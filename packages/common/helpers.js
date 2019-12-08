export const getMeasureUnit = value =>
  typeof value === "number" ? `${value}px` : value;

export const getColor = (theme, color) => theme.colors[color] || color;
