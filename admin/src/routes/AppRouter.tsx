import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy } from "react";

import ProtectedRoute from "@/components/ProtectedRoute";

const Login = lazy(() => import("@/pages/auth/Login"));
const Signup = lazy(() => import("@/pages/auth/Signup"));

const Home = lazy(() => import("@/pages/Home"));
const CustomersPage = lazy(() => import("@/pages/Customers"));
const CustomerDetailsPage = lazy(() => import("@/pages/CustomerDetails"));
const AddCustomerPage = lazy(() => import("@/pages/AddCustomer"));

const UsersPage = lazy(() => import("@/pages/Users"));

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
        path: "customers",
        element: (
          <ProtectedRoute>
            <CustomersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "customers/add-customer",
        element: (
          <ProtectedRoute>
            <AddCustomerPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "customers/edit-customer/:id",
        element: (
          <ProtectedRoute>
            <AddCustomerPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "customers/:id",
        element: (
          <ProtectedRoute>
            <CustomerDetailsPage />
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
