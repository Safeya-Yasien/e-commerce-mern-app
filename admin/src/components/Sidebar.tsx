import { House, LogOut, UserRoundPlus } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  };

  return (
    <div className=" text-white">
      <h1 className="text-center text-2xl pb-6 border-b border-b-gray-500 mb-6">
        DashCRM
      </h1>

      <ul className="flex flex-col gap-4 px-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-[#2A2F36]"
              }`
            }
          >
            <House className="w-4 h-4" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="customers"
            end
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-[#2A2F36]"
              }`
            }
          >
            <UserRoundPlus className="w-4 h-4" />
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="customers/add-customer"
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-[#2A2F36]"
              }`
            }
          >
            <UserRoundPlus className="w-4 h-4" />
            Add Customers
          </NavLink>
        </li>

        <li>
          <NavLink
            to="users"
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white font-semibold shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-[#2A2F36]"
              }`
            }
          >
            <UserRoundPlus className="w-4 h-4" />
            Users
          </NavLink>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="cursor-pointer flex items-center gap-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#2A2F36] w-full text-left transition-all duration-200"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
