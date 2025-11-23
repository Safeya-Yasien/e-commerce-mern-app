import React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="bg-[#1C2024] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#181B1F] p-8 md:p-10 rounded-2xl shadow-2xl border border-white/10 transition duration-300">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
