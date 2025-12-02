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
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },

      {
        path: "products",
        element: (
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "products/add-product",
        element: (
          <ProtectedRoute>
            <AddProductPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "products/:id",
        element: (
          <ProtectedRoute>
            <ProductDetailsPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "users",
        element: (
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "users/add-user",
        element: (
          <ProtectedRoute>
            <AddUserPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "users/:id",
        element: (
          <ProtectedRoute>
            <UserDetailPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
