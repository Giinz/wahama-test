import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LoginSuccessToken {
  accessToken: string;
  refreshToken: string;
}
export interface LoginPayload {
  username: string;
  password: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  accessToken: string;
  refreshToken: string;
  errorMessage?: string;
}
const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  accessToken: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<LoginSuccessToken>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.errorMessage = "";
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
      state.errorMessage = action.payload;
    },
    logout(state) {
      state.logging = false;
      state.accessToken = "";
      state.refreshToken = "";
      state.isLoggedIn = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },
});

export const { login, loginFailed, loginSuccess, logout } = authSlice.actions;

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectLogging = (state: any) => state.auth.logging;
const authReducer = authSlice.reducer;
export default authReducer;
