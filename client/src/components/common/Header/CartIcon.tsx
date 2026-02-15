import { axiosInstance } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const CartIcon = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cartCount"],
    queryFn: async () => {
      const res = await axiosInstance("/cart/count");
      return res.data;
    },
    enabled: !!localStorage.getItem("token"),
  });

  if (isLoading)
    return (
      <span className="loading loading-spinner loading-xs text-primary"></span>
    );
  if (error) return <ShoppingCart className="opacity-50" />;

  const count = data?.data.count || 0;

  return (
    <Link to="/cart">
      <div className="indicator">
        {/* The Indicator Badge */}
        {count > 0 && (
          <span className="indicator-item badge badge-primary font-bold w-5 h-5 aspect-square p-0 flex items-center justify-center text-[10px]">
            {" "}
            {count}
          </span>
        )}

        {/* The Icon */}
        <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
      </div>
    </Link>
  );
};
export default CartIcon;
