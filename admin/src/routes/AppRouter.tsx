import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy } from "react";

import { ProtectedRoute, RoleProtectedRoute } from "@/components";
import { ROUTE_PATHS } from "./routePaths";
import { ADMIN_ROUTES } from "./adminRoutes";
import { AUTH_ROUTES } from "./authRoutes";

const Home = lazy(() => import("@/pages/Home"));

const ProductsPage = lazy(() => import("@/pages/Products"));
const ProductDetailsPage = lazy(() => import("@/pages/ProductDetails"));

const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: <MainLayout />,

    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: ROUTE_PATHS.PRODUCTS,
            element: <ProductsPage />,
          },
          {
            path: ROUTE_PATHS.PRODUCT_DETAILS,
            element: <ProductDetailsPage />,
          },

          {
            element: <RoleProtectedRoute />,
            children: ADMIN_ROUTES,
          },
        ],
      },
    ],
  },
  ...AUTH_ROUTES,
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
