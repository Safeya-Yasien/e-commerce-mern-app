import React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1216] px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#14181C] p-6 shadow-xl border border-white/10">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
