import { Footer, Header } from "@/components/common";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />

      {/* <main className="bg-deep-slate grow pt-16 "> */}
      <main className=" grow pt-16 ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
export default MainLayout;
