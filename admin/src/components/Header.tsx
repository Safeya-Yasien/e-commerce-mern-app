import { useState } from "react";
import { User } from "lucide-react";
import SearchBar from "./SearchBar";
import { useQuery } from "@tanstack/react-query";

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
      <div className="flex items-center gap-2 relative">
        {token && (
          <div className="relative">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="cursor-pointer flex items-center gap-2 hover:text-indigo-400 transition"
            >
              <User className="w-6 h-6" />
              <span className="hidden sm:inline">Profile</span>
            </button>

            {menuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg p-3 text-sm z-10">
                <p className="text-gray-300">
                  {data?.data?.email || "user@email.com"}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
