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
    <footer className="bg-base-200 text-base-content transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12">
          {/* 1. Brand/Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="flex items-center font-black text-2xl text-primary tracking-tighter"
            >
              <ShoppingBasket className="h-7 w-7 mr-2" />
              ECO
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-base-content/60 max-w-xs">
              Providing premium, sustainable products that elevate your
              lifestyle while protecting the planet for future generations.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-6 uppercase tracking-widest text-primary/80">
              Support
            </h3>
            <ul className="space-y-4 text-sm">
              {["About Us", "Shipping", "Returns", "FAQ"].map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="link link-hover text-base-content/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Shop Categories */}
          <div>
            <h3 className="font-bold text-base mb-6 uppercase tracking-widest text-primary/80">
              Collection
            </h3>
            <ul className="space-y-4 text-sm">
              {["Apparel", "Home Goods", "Beauty", "Sale Items"].map((cat) => (
                <li key={cat}>
                  <Link
                    to="#"
                    className="link link-hover text-base-content/70 hover:text-primary transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact/Social */}
          <div>
            <h3 className="font-bold text-base mb-6 uppercase tracking-widest text-primary/80">
              Connect
            </h3>
            <p className="text-sm text-base-content/70 mb-6">
              Questions? Reach out: <br />
              <a
                href="mailto:info@eco.com"
                className="font-bold text-base-content hover:text-primary"
              >
                info@eco.com
              </a>
            </p>

            <div className="flex space-x-3">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="
        group flex items-center justify-center 
        w-11 h-11 rounded-full 
        bg-base-300 text-base-content 
        hover:bg-primary hover:text-primary-content 
        hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/30 
        transition-all duration-300 ease-out
      "
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Copyright Section --- */}
        <div className="pt-8 border-t border-base-content/10 flex flex-col md:flex-row justify-between items-center text-xs text-base-content/50 gap-4">
          <p>&copy; {currentYear} ECO Store. Made with care for the Earth.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
