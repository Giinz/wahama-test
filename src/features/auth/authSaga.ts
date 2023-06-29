import { call, fork, put, take } from "redux-saga/effects";
import {
  AuthState,
  LoginPayload,
  login,
  loginFailed,
  loginSuccess,
  logout,
} from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";
import { isAxiosError } from "axios";

function* handleLogin(payload: LoginPayload) {
  try {
    const token: AuthState = yield call(authApi.login, payload);
    console.log(token);
    localStorage.setItem("accessToken", token.accessToken);
    localStorage.setItem("refreshToken", token.refreshToken);
    console.log("set token");
    yield put(loginSuccess(token));

    console.log("login success");
  } catch (err) {
    if (isAxiosError(err)) {
      const errorMsg = err.response?.data.message
      yield put(loginFailed(Array.isArray(errorMsg)?errorMsg[0]:errorMsg));
    } else {
      yield put(loginFailed("Something when wrong!"));
    }
  }
}
// function* handleLogout() {
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");
// }
function* watchLoginFlow() {
  while(true){
    const isLoggedIn = Boolean(localStorage.getItem("accessToken"));
  if (!isLoggedIn) {
    const action: PayloadAction<LoginPayload> = yield take(login.type);
    yield fork(handleLogin, action.payload);
  }
  yield take([logout.type, loginFailed.type]);
  yield call(logout);
  }
}

export default function* authSaga() {
  yield call(watchLoginFlow);
}
