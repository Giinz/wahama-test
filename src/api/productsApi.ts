import { ListParams, ListRespone, Product } from "../types";
import axiosClient from "./axiosClient";

const productsApi = {
  getAll(params: ListParams): Promise<ListRespone<Product>> {
    const url = "products";
    return axiosClient.get(url, { params });
  },
  getById(id:string): Promise<Product> {
    const url = `products/${id}`;
    return axiosClient.get(url, {  });
  },
  add(data: Product): Promise<Product> {
    const url = "products";
    return axiosClient.post(url, data);
  },
  update(data: Product): Promise<Product> {
    const url = "products";
    return axiosClient.put(url, data);
  },
  remove(id: string): Promise<any> {
    const url = `products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productsApi;
