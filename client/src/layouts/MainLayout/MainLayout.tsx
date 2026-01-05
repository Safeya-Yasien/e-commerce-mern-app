import { Footer, Header } from "@/components/common";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />

      <main className=" grow pt-16 ">
        <Outlet />
      </main>

      <Footer />
      <div className="hidden">
        <ThemeSwitcher />
      </div>
    </div>
  );
};
export default MainLayout;
