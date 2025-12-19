import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";

// admin users route
const UsersPage = lazy(() => import("@/pages/Users"));
const AddUserPage = lazy(() => import("@/pages/AddUser"));
const UserDetailPage = lazy(() => import("@/pages/UserDetails"));

// admin products route
const AddProductPage = lazy(() => import("@/pages/AddProduct"));

export const ADMIN_ROUTES = [
  { path: ROUTE_PATHS.ADMIN_USERS, element: <UsersPage /> },
  { path: ROUTE_PATHS.ADMIN_ADD_USER, element: <AddUserPage /> },
  { path: ROUTE_PATHS.ADMIN_UPDATE_USER, element: <AddUserPage /> },
  { path: ROUTE_PATHS.ADMIN_USER_DETAILS, element: <UserDetailPage /> },
  { path: ROUTE_PATHS.ADMIN_ADD_PRODUCT, element: <AddProductPage /> },
  { path: ROUTE_PATHS.ADMIN_UPDATE_PRODUCT, element: <AddProductPage /> },
];
