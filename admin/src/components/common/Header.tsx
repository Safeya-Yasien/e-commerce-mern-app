import { User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../SearchBar";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/users`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/me`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (!response.ok)
        throw new Error(`Server responded with ${response.status}`);
      return response.json();
    },
  });

  console.log("data", data);

  return (
    <header className="text-white flex items-center justify-between relative bg-[#181B1F] rounded-2xl p-4">
      {/* search + menu */}
      <div className="flex items-center gap-4">
        <div className="lg:hidden">
          <MobileSidebar />
        </div>
        <SearchBar />
      </div>

      {/* profile */}
      <div className="flex items-center gap-2 relative">
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="cursor-pointer flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <User className="w-6 h-6" />
          </button>
          {menuOpen && data && (
            <div className="absolute -right-3 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg p-3 text-sm z-10 flex flex-col gap-1">
              <p className="text-gray-300 ">
                {data?.data?.email || "user@email.com"}
              </p>
              <p className="text-xs text-gray-400 capitalize mt-1">
                {data?.data?.role}
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
