import { request } from "./base";

export const createUser = request({ url: "/users", method: "POST" });

export const login = request({ url: "/auth/login", method: "POST" });
