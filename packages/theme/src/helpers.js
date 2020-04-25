export const getMeasureUnit = value =>
  typeof value === "number" ? `${value}px` : value;

export const getComponentSize = ({ theme, size }, prop, component = "button") =>
  getMeasureUnit(theme[component][size][prop]);

export const getColor = (theme, color) => theme.colors[color] || color;

export const getComponentColor = (
  { theme, colorScheme, mode },
  prop,
  component = "button"
) => {
  const src = theme[component];
  const color = mode ? src[mode][prop] : src[prop];
  const colorName = colorScheme ? src[colorScheme][color] : src[color];
  return getColor(theme, colorName || color);
};

export const getInputColor = (props, prop) => {
  props.hasError
    ? props.theme.colors.warning
    : getComponentColor(props, prop, "input");
};
