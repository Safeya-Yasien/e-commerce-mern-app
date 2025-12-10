export interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  quantity: number;
}

export interface IProductsResponse {
  data: IProduct[];
}
