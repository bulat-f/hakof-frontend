import { isString, set } from "lodash";
import axiosFactory from "./axiosFactory";

export const apiService = axiosFactory();

const getConfig = (options) => {
  const jwt = "jwt";
  if (jwt) {
    const Authorization = `Bearer ${jwt}`;
    if (isString(options)) return { url: options, headers: { Authorization } };

    return set(options, ["headers", "Authorization"], Authorization);
  }

  return options;
};

export const request = async (options) => {
  const config = getConfig(options);
  const { data } = await apiService(config);
  return data;
};
