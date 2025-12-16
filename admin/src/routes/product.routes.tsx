import { lazy } from "react";
import { ROUTES } from "./paths";

const ProductsPage = lazy(() => import("@/pages/Products"));
const AddProductPage = lazy(() => import("@/pages/AddProduct"));
const ProductDetailsPage = lazy(() => import("@/pages/ProductDetails"));

export const productRoutes = [
  { path: ROUTES.PRODUCTS, element: <ProductsPage /> },
  { path: ROUTES.ADD_PRODUCT, element: <AddProductPage /> },
  { path: ROUTES.EDIT_PRODUCT, element: <AddProductPage /> },
  { path: ROUTES.PRODUCT_DETAILS, element: <ProductDetailsPage /> },
];
