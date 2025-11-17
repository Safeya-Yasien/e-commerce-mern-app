import { Link } from "react-router";
import CartIcon from "./CartIcon";
import { Folders, Home, Mail, ShoppingBasket } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-charcoal text-mist-aqua fixed top-0 left-0 w-full z-50 h-16">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center font-bold text-xl text-crimson-tide transition hover:opacity-85"
        >
          <ShoppingBasket className="h-8 w-8 mr-2 text-crimson-tide" />
          ECO
        </Link>

        {/* Navigation + Actions */}
        <div className="flex items-center gap-8">
          {/* Nav */}
          <nav>
            <ul className="flex items-center gap-6 font-medium">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:text-sunstone transition"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="flex items-center gap-1 hover:text-sunstone transition"
                >
                  <Folders className="h-4 w-4" />
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-1 hover:text-sunstone transition"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Cart + Login */}
          <div className="flex items-center gap-4 font-medium">
            <CartIcon />
            <Link
              to="/login"
              className="transition bg-crimson-tide px-3 py-1 rounded text-white hover:opacity-85"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
