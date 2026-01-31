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
    <footer className="mt-auto border-t border-neutral/20 text-neutral-light dark:text-base-light dark:bg-linear-to-r dark:from-[#0f1112] dark:to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-8 border-b border-neutral/20">
          {/* 1. Brand/Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="flex items-center font-bold text-2xl text-[#b35a00] hover:text-sunstone transition-colors duration-300"
            >
              <ShoppingBasket className="h-6 w-6 mr-2" aria-hidden="true" />
              ECO
            </Link>
            <p className="mt-3 text-sm max-w-xs ">
              Sustainable products for a healthier planet.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-[#b35a00] font-bold mb-3 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "Shipping", "Returns", "FAQ"].map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="hover:text-sunstone transition-colors duration-300 font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Categories */}
          <div>
            <h3 className="text-[#b35a00] font-bold mb-3 text-lg">Shop</h3>
            <ul className="space-y-2 text-sm">
              {["Apparel", "Home Goods", "Beauty", "Sale Items"].map((cat) => (
                <li key={cat}>
                  <Link
                    to="#"
                    className="hover:text-sunstone transition-colors duration-300 font-medium"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact/Social */}
          <div>
            <h3 className="text-[#b35a00] font-bold mb-3 text-lg">Connect</h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:info@eco.com"
                className="hover:text-sunstone transition-colors duration-300 font-medium"
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
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral/30 text-neutral-light  hover:text-sunstone transition-all duration-300"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Copyright Section --- */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-sm ">
          <p>&copy; {currentYear} ECO. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((policy) => (
              <Link
                key={policy}
                to={`/${policy.toLowerCase().replace(/ /g, "-")}`}
                className="hover:text-sunstone transition-colors duration-300 font-medium"
              >
                {policy}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
