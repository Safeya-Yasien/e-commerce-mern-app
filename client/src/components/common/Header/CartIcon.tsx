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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading cart count</p>;

  return (
    <Link
      to="/cart"
      className="flex items-center gap-1 transition relative dark:text-base-light"
    >
      <ShoppingCart />
      <span className="absolute -top-3 -right-2 w-4 h-4 rounded-full bg-primary-light text-base-light flex items-center justify-center text-xs">
        {data?.data.count || 0}
      </span>
    </Link>
  );
};
export default CartIcon;
