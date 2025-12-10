import { useState } from "react";
import { User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../SearchBar";
import MobileSidebar from "./MobileSidebar";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

type JWTPayload = {
  id: string;
  role: string;
  iat?: number;
  exp?: number;
};

const Header = () => {
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  let payload: JWTPayload | null = null;

  if (token) {
    try {
      payload = JSON.parse(atob(token.split(".")[1] || "{}"));
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  const id = payload?.id;

  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok)
        throw new Error(`Server responded with ${response.status}`);
      return response.json();
    },
    enabled: !!id,
  });

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
          {token && menuOpen && (
            <div className="absolute -right-3 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg p-3 text-sm z-10">
              <p className="text-gray-300 ">
                {data?.data?.email || "user@email.com"}
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
