import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";

const AuthLayout = lazy(() => import("@/layouts/AuthLayout/AuthLayout"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Signup = lazy(() => import("@/pages/auth/Signup"));

export const AUTH_ROUTES = [
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
];
