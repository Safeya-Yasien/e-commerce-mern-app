import type { IProduct } from "./product.types";

export interface ICategory {
  id: string;
  name: string;
  description: string;
  image: string;
  products: IProduct[];
  count: number;
}
