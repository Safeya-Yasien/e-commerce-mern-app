import { Footer, Header } from "@/components/common";
import ThemeSwitcher from "@/components/themeSwitcher";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />

      <main className=" grow pt-16 ">
        <Outlet />
      </main>

      <Footer />
      <ThemeSwitcher />
    </div>
  );
};
export default MainLayout;
