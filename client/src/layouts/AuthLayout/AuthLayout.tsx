import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen bg-base-100 px-4 sm:px-6 md:px-8">
      {/* Auth content */}
      <div className="mx-auto flex min-h-screen max-w-md items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
