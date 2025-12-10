import { Header, Sidebar } from "@/components/common";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#1C2024] h-screen flex p-4 gap-4 overflow-hidden">
      {/* Sidebar */}
      <aside className="bg-[#181B1F] p-4 rounded-2xl w-[250px] hidden lg:flex">
        <Sidebar />
      </aside>

      <div className="flex-1 grid grid-rows-[70px_1fr] gap-4 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="bg-[#252A30] rounded-2xl p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
