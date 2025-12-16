import { getRoleFromToken } from "@/utils";
import { Navigate, Outlet } from "react-router";

const RoleProtectedRoute = () => {
  const role = getRoleFromToken();

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
export default RoleProtectedRoute;
