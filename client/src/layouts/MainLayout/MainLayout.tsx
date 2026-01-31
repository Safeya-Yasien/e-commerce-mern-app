import { Footer, Header } from "@/components/common";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <Header />

      <main className="grow pt-14">
        <Outlet />
      </main>

      <Footer />
      <ThemeSwitcher />
    </div>
  );
};
export default MainLayout;
