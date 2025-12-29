import ThemeSwitcher from "@/components/themeSwitcher";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen bg-base-100 px-4 sm:px-6 md:px-8">
      {/* Theme switcher */}
      <div className="absolute right-4 top-4">
        <ThemeSwitcher />
      </div>

      {/* Auth content */}
      <div className="mx-auto flex min-h-screen max-w-md items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
