import { Link } from "react-router";
import { Facebook, Instagram, Twitter, ShoppingBasket } from "lucide-react";
import { memo } from "react";

const socialLinks = [
  { href: "#", Icon: Facebook, label: "Facebook" },
  { href: "#", Icon: Instagram, label: "Instagram" },
  { href: "#", Icon: Twitter, label: "Twitter" },
];

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-100 text-mist-aqua border-t border-neutral mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-deep-slate">
          {/* 1. Brand/Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="flex items-center font-bold text-2xl text-secondary"
            >
              <ShoppingBasket className="h-6 w-6 mr-2" aria-hidden="true" />
              ECO
            </Link>
            <p className="mt-2 text-sm max-w-xs text-mist-aqua/70">
              Sustainable products for a healthier planet.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-accent font-bold mb-3 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Categories */}
          <div>
            <h3 className="text-accent font-bold mb-3 text-lg">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="hover:text-accent transition">
                  Apparel
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition">
                  Home Goods
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition">
                  Beauty
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition">
                  Sale Items
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Contact/Social */}
          <div>
            <h3 className="text-accent font-bold mb-3 text-lg">Connect</h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:info@eco.com"
                className="hover:text-accent transition"
              >
                info@eco.com
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mist-aqua hover:text-crimson-tide transition"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Copyright Section --- */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-mist-aqua/50">
          <p>&copy; {currentYear} ECO. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover:text-mist-aqua transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-mist-aqua transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
