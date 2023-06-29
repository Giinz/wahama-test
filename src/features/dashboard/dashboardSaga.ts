import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchData, fetchDataFailed, fetchDataSuccess, setProductList } from "./dashboardSlice";
import { ListRespone, Product } from "../../types";
import productsApi from "../../api/productsApi";

function* fetchProductList() {
  const { data }: ListRespone<Product> = yield call(productsApi.getAll, {
    pageNumber: 1,
    pageSize: 10,
  });
  yield put(setProductList(data));
}
function* fetchDashboardData() {
  try{
    yield all([fetchProductList()]);
    yield put(fetchDataSuccess())
  }catch(error){
    console.log(error)
    yield put(fetchDataFailed())
  }
}

export default function* dashboardSaga() {
  yield takeLatest(fetchData.type, fetchDashboardData);
}
