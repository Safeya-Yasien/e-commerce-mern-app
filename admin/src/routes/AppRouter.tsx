import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy } from "react";

import ProtectedRoute from "@/components/ProtectedRoute";

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
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          // products route
          {
            path: "products",
            element: <ProductsPage />,
          },
          {
            path: "products/add-product",
            element: <AddProductPage />,
          },

          {
            path: "products/update/:id",
            element: <AddProductPage />,
          },

          {
            path: "products/:id",
            element: <ProductDetailsPage />,
          },

          // users route
          {
            path: "users",
            element: <UsersPage />,
          },

          {
            path: "users/add-user",
            element: <AddUserPage />,
          },

          {
            path: "users/update/:id",
            element: <AddUserPage />,
          },
          {
            path: "users/:id",
            element: <UserDetailPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
