import { isAuthenticated } from "@/utils";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isUserAuthenticated = isAuthenticated();

  if (isUserAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/auth/login" replace />;
};
export default ProtectedRoute;
