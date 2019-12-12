import { postRequest } from "./basic";

export const createUser = user => postRequest("users", null, user);

export const login = creds => postRequest("auth/login", null, creds);
