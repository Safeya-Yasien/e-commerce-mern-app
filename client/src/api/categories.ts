import { axiosInstance } from "./axios";

export const fetchCategories = async () => {
  const response = await axiosInstance("/products/categories");
  return response.data;
};
