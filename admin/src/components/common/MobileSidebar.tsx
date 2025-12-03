import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  return (
    <Sheet >
      <SheetTrigger>
        <Menu className="" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[#181B1F] text-white py-8 px-4 w-80 border-r-0"
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
export default MobileSidebar;
