import { AuthState } from "../features/auth/authSlice";
import { LoginPayload } from "../features/auth/authSlice";
import axiosClient from "./axiosClient";

const authApi = {
  async login(user: LoginPayload): Promise<AuthState> {
    try {
      const url = "auth/login";
      return await axiosClient.post(url, user);
    } catch (err) {
      throw err;
    }
  },
};

export default authApi;
