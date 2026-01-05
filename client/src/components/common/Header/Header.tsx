import { Link, useLocation } from "react-router";
import CartIcon from "./CartIcon";
import {
  Folders,
  Home,
  Mail,
  Menu,
  ShoppingBasket,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/api/axios";
import { useEffect } from "react";

interface INavItem {
  path: string;
  name: string;
  Icon: LucideIcon;
}

const navItems: INavItem[] = [
  { path: "/#hero", name: "Home", Icon: Home },
  { path: "/#categories", name: "Categories", Icon: Folders },
  { path: "/#contact", name: "Contact", Icon: Mail },
];

const Header = () => {
  const hasToken = !!localStorage.getItem("token");
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const section = document.getElementById(id);
    setTimeout(() => {
      section?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [hash]);

  const { data: client } = useQuery({
    queryKey: ["client"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return null;
      }
      const res = await axiosInstance("/users/me");
      return res.data;
    },

    enabled: hasToken,
  });

  return (
    <header className="bg-base-100 text-base-content fixed top-0 left-0 w-full z-50 h-14 border-b border-base-100 shadow-sm">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center font-bold text-xl text-primary"
        >
          <ShoppingBasket className="h-8 w-8 mr-2 text-primary" />
          ECO
        </Link>

        {/* Navigation + Actions */}
        <div className="flex items-center gap-6">
          {/* Nav */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6 font-medium">
              {navItems.map(({ path, name, Icon }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="cursor-pointer flex items-center gap-1 hover:text-accent transition"
                  >
                    <Icon className="h-4 w-4" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* mobile menu button */}
          <label
            htmlFor="my-drawer-5"
            className="drawer-button cursor-pointer md:hidden bg-neutral text-base-100 px-2 py-1 rounded-md border border-neutral group transition"
          >
            <Menu className="w-6 h-6 text-primary group-hover:text-accent transition" />
          </label>

          {/* Cart + Login */}
          <div className="flex items-center gap-4 font-medium">
            <CartIcon />

            {client ? (
              <Link to="/profile" className="transition  text-base-100 ">
                <User className="w-6 h-6 text-primary" />
              </Link>
            ) : (
              <Link
                to="auth/login"
                className="transition bg-primary px-3 py-1 rounded  text-base-100 hover:bg-secondary"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* drawer */}
      <div className="drawer drawer-end ">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="flex justify-end z-10 p-4">
            <label
              htmlFor="my-drawer-5"
              className="cursor-pointer hover:text-primary transition"
            >
              <X className="w-6 h-6 text-mist-aqua" />
            </label>
          </div>

          <ul className="menu bg-base-200 min-h-full w-80 p-4 pt-12">
            {navItems.map(({ path, name, Icon }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="flex items-center gap-1 hover:text-accent transition"
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
