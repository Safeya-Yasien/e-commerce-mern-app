import { axiosInstance } from "./axios";

export const fetchProducts = async (category: string | null) => {
  const response = await axiosInstance(
    `/products?limit=8${category ? "&category=" + category : ""}`
  );
  return response.data;
};
