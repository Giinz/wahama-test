import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";

export interface DashBoardState {
  loading: boolean;
  productList: Product[];
}
const initialState: DashBoardState = {
  loading: false,
  productList: [],
};
const dashboardSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true;
    },
    fetchDataSuccess(state) {
      state.loading = false;
    },
    fetchDataFailed(state) {
      state.loading = false;
    },
    setProductList(state, action: PayloadAction<Product[]>) {
      state.productList = action.payload;
    },
  },
});

const dashboardReducer = dashboardSlice.reducer;

export const { setProductList, fetchData, fetchDataFailed, fetchDataSuccess } =
  dashboardSlice.actions;
export default dashboardReducer;
