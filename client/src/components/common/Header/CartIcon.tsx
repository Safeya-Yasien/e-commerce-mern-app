import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const CartIcon = () => {
  return (
    <Link to="/cart" className="flex items-center gap-1 transition relative">
      <ShoppingCart />
      <span className="absolute -top-3 -right-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-xs">
        0
      </span>
    </Link>
  );
};
export default CartIcon;
