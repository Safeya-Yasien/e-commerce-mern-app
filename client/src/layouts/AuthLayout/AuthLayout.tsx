import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen bg-base-light dark:bg-base-dark px-4 sm:px-6 md:px-8">
      <div className="mx-auto flex min-h-screen max-w-md items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
