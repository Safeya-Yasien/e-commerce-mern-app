import { axiosInstance } from "@/api/axios";
import type { IProduct } from "@/types/product.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router";
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
    mutationFn: async () => await axiosInstance.delete("/cart/clear"),
    onSuccess: () => {
      toast.success("Cart cleared");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeItemMutation = useMutation({
    mutationFn: async (id: string) =>
      await axiosInstance.delete(`/cart/remove/${id}`),
    onSuccess: () => {
      toast.success("Item removed");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const mutationUpdateCart = useMutation({
    mutationFn: async (data: { productId: string; quantity: number }) =>
      await axiosInstance.put(`/cart/update`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cartCount"] });
    },
  });

  if (isLoading)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <span className="loading loading-ring loading-lg text-primary"></span>
        <p className="text-sm font-bold uppercase tracking-widest opacity-50">
          Syncing Cart...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-error">
        Error fetching your cart. Please try again.
      </div>
    );

  const items: ICartItem[] = data.data.products || [];
  const subtotal = items.reduce((total, item) => {
    if (!item.productId) return total;
    return total + item.productId.price * item.quantity;
  }, 0);

  if (items.length === 0)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <div className="w-20 h-20 bg-base-200 rounded-full flex items-center justify-center mb-4">
          <ShoppingCart className="w-10 h-10 opacity-20" />
        </div>
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="text-base-content/60 mb-6">
          Looks like you haven't added anything yet.
        </p>
        <Link to="/" className="btn btn-primary px-8">
          Start Shopping
        </Link>
      </div>
    );

  return (
    <div className="bg-base-200 min-h-screen py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Items */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-end mb-6">
            <h1 className="text-3xl font-black tracking-tight">
              Your <span className="text-primary">Cart</span>
            </h1>
            <span className="text-sm font-bold opacity-50">
              {items.length} Items
            </span>
          </div>

          <div className="space-y-4">
            {items.map((item) => {
              if (!item.productId) return null;
              const product = item.productId;
              return (
                <div
                  key={product.id}
                  className="card card-side bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow"
                >
                  <figure className="w-32 sm:w-44 p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-xl object-cover h-full w-full"
                    />
                  </figure>

                  <div className="card-body p-4 sm:p-6 justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="card-title text-base sm:text-lg">
                          {product.name}
                        </h2>
                        <p className="text-primary font-bold">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItemMutation.mutate(product.id)}
                        className="btn btn-ghost btn-sm btn-circle text-error"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="card-actions justify-between items-center mt-4">
                      {/* Custom Quantity Join */}
                      <div className="join border border-base-300 bg-base-200">
                        <button
                          disabled={
                            item.quantity <= 1 || mutationUpdateCart.isPending
                          }
                          onClick={() =>
                            mutationUpdateCart.mutate({
                              productId: product.id,
                              quantity: -1,
                            })
                          }
                          className="btn btn-ghost btn-xs sm:btn-sm join-item"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="join-item px-4 flex items-center justify-center font-bold text-xs sm:text-sm min-w-10">
                          {item.quantity}
                        </span>
                        <button
                          disabled={mutationUpdateCart.isPending}
                          onClick={() =>
                            mutationUpdateCart.mutate({
                              productId: product.id,
                              quantity: 1,
                            })
                          }
                          className="btn btn-ghost btn-xs sm:btn-sm join-item"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <p className="text-right font-black text-lg">
                        ${(product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Summary */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-xl border border-base-300 sticky top-24">
            <div className="card-body">
              <h2 className="card-title mb-4 border-b pb-2">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between opacity-70">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between opacity-70">
                  <span>Estimated Shipping</span>
                  <span className="text-success font-bold uppercase text-xs">
                    Free
                  </span>
                </div>
                <div className="flex justify-between opacity-70">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>

                <div className="divider my-1"></div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-black text-primary">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="card-actions flex-col gap-3 mt-6">
                <button className="btn btn-primary btn-block shadow-lg gap-2 text-lg">
                  Checkout <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => clearCartMutation.mutate()}
                  className="btn btn-ghost btn-block btn-sm text-error/60 hover:text-error"
                >
                  Clear Shopping Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
