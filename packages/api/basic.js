import { API_BASE_URL } from "./config.json";

const getUrl = path => `${API_BASE_URL}/${path}`;

const createRequest = async (path, jwt, params) => {
  const response = await fetch(getUrl(path), {
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt
    },
    ...params
  });

  if (response.status >= 300) {
    throw response.json();
  }
  return response.json();
};

export const getRequest = (path, jwt, query = {}) => {
  return createRequest(path, jwt);
};

export const postRequest = (path, jwt = null, payload) => {
  return createRequest(path, jwt, {
    method: "POST",
    body: JSON.stringify(payload)
  });
};

export const putRequest = (path, jwt = null, payload) => {
  return createRequest(path, jwt, {
    method: "PUT",
    body: JSON.stringify(payload)
  });
};

export const deleteRequest = (path, jwt = null, payload) => {
  return createRequest(path, jwt, {
    method: "DELETE",
    body: JSON.stringify(payload)
  });
};
