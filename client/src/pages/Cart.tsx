import { axiosInstance } from "@/api/axios";
import type { IProduct } from "@/types/product.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface ICartItem {
  productId: IProduct | null;
  quantity: number;
}

export interface ICart {
  _id: string;
  userId: string;
  products: ICartItem[];
}

const Cart = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosInstance("/cart");
      return res.data;
    },
  });

  const clearCartMutation = useMutation({
    mutationKey: ["clearCart"],
    mutationFn: async () => {
      const res = await axiosInstance.delete("/cart/clear");
      return res.data;
    },

    onSuccess: () => {
      toast.success("Cart cleared");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: () => {
      toast.error("Error clearing cart");
    },
  });

  const removeItemMutation = useMutation({
    mutationKey: ["removeFromCart"],
    mutationFn: async (id: string) => {
      const res = await axiosInstance.delete(`/cart/remove/${id}`);
      return res.data;
    },

    onSuccess: () => {
      toast.success("Item removed from cart");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: () => {
      toast.error("Error removing item from cart");
    },
  });

  if (isLoading) return <p>Loading cart...</p>;
  if (error) return <p>Error fetching cart</p>;

  const items: ICartItem[] = data.data.products;

  const subtotal = items.reduce((total, item) => {
    if (!item.productId) return total;
    return total + item.productId.price * item.quantity;
  }, 0);

  return (
    <div className="bg-gray-50 text-neutral-light p-6 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-2xl font-bold text-sunstone ">Your Cart</h1>

          {items.map((item: ICartItem) => {
            if (!item.productId) return null;
            const product = item.productId;
            return (
              <div
                key={product.id}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="font-medium">{product.name}</h2>
                  <p className="text-sm opacity-70">
                    ${product.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button className="cursor-pointer px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">
                      -
                    </button>
                    <span className="min-w-6 text-center">{item.quantity}</span>
                    <button className="cursor-pointer px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium">
                    ${(product.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItemMutation.mutate(product.id)}
                    className="cursor-pointer text-sm text-primary-light hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <button className="cursor-pointer w-full mt-6 py-3 rounded-xl bg-primary-light text-white font-medium hover:bg-primary-dark transition">
            Checkout
          </button>

          <button
            onClick={() => clearCartMutation.mutate()}
            className="cursor-pointer w-full mt-3 py-2 rounded-xl border border-gray-200 hover:bg-primary-light hover:text-white transition duration-300"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
