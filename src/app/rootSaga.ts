import authSaga from "../features/auth/authSaga";
import { all } from "redux-saga/effects";
import dashboardSaga from "../features/dashboard/dashboardSaga";

export default function* rootSaga() {
  console.log("root saga");
  yield all([ authSaga(), dashboardSaga()])
}