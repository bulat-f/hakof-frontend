import { request } from "./base";

interface ILoginProps {
  email: string;
  password: string;
}

interface IRegisterUserProps extends ILoginProps {
  first_name: string;
  last_name: string;
}

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  token: string;
}

export const register = (creds: IRegisterUserProps): Promise<IUser> =>
  request({ url: "/users", method: "POST", data: creds });

export const login = (creds: ILoginProps): Promise<IUser> =>
  request({ url: "/auth/login", method: "POST", data: creds });
