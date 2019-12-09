export const getMeasureUnit = value =>
  typeof value === "number" ? `${value}px` : value;

export const getColor = (theme, color) => theme.colors[color] || color;

export const getSize = ({ theme, size }, prop, component = "button") =>
  getMeasureUnit(theme[component][size][prop]);

export const getButtonColor = (
  { theme, colorScheme, mode },
  prop,
  component = "button"
) => {
  const src = theme[component];
  const color = mode ? src[mode][prop] : src[prop];
  const colorName = colorScheme ? src[colorScheme][color] : src[color];
  return getColor(theme, colorName || color);
};
