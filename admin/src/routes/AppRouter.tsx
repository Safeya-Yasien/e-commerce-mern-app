import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy } from "react";

import {
  ErrorBoundary,
  ProtectedRoute,
  RoleProtectedRoute,
} from "@/components";
import { ROUTE_PATHS } from "./routePaths";

const Login = lazy(() => import("@/pages/auth/Login"));
const Signup = lazy(() => import("@/pages/auth/Signup"));

const Home = lazy(() => import("@/pages/Home"));
const UsersPage = lazy(() => import("@/pages/Users"));
const AddUserPage = lazy(() => import("@/pages/AddUser"));
const UserDetailPage = lazy(() => import("@/pages/UserDetails"));
const ProductsPage = lazy(() => import("@/pages/Products"));
const AddProductPage = lazy(() => import("@/pages/AddProduct"));
const ProductDetailsPage = lazy(() => import("@/pages/ProductDetails"));

const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayout/AuthLayout"));

const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
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
            children: [
              // admin users route
              {
                path: ROUTE_PATHS.ADMIN_USERS,
                element: <UsersPage />,
              },
              {
                path: ROUTE_PATHS.ADMIN_ADD_USER,
                element: <AddUserPage />,
              },

              {
                path: ROUTE_PATHS.ADMIN_UPDATE_USER,
                element: <AddUserPage />,
              },
              {
                path: ROUTE_PATHS.ADMIN_USER_DETAILS,
                element: <UserDetailPage />,
              },

              // admin products route
              {
                path: ROUTE_PATHS.ADMIN_ADD_PRODUCT,
                element: <AddProductPage />,
              },

              {
                path: ROUTE_PATHS.ADMIN_UPDATE_PRODUCT,
                element: <AddProductPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: ROUTE_PATHS.AUTH_LAYOUT,
    element: <AuthLayout />,
    children: [
      {
        path: ROUTE_PATHS.SIGNUP,
        element: <Signup />,
      },
      {
        path: ROUTE_PATHS.LOGIN,
        element: <Login />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
