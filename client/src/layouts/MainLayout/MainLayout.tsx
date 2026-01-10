import { Footer, Header } from "@/components/common";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ThemeProvider } from "@/context/themeProvider";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <ThemeProvider>
        <Header />

        <main className="grow pt-14">
          <Outlet />
        </main>

        <Footer />
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
};
export default MainLayout;
