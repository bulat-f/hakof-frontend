import axios from "axios";
import { API_BASE_URL } from "./config.json";

const removeJwt = () => localStorage.removeItem("jwt");

const axiosFactory = (options) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const axiosObject = axios.create({
    baseURL: API_BASE_URL,
    timeout: 20000,
    headers,
    ...options,
  });

  axiosObject.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        removeJwt();
      }
      return Promise.reject(error);
    }
  );

  return axiosObject;
};

export default axiosFactory;
