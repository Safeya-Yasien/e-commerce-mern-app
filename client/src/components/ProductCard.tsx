import { axiosInstance } from "@/api/axios";
import type { IProduct } from "@/types/product.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: IProduct }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["addToCart", product.id],
    mutationFn: async () => {
      const res = await axiosInstance.post("/cart/add", {
        productId: product.id,
      });

      return res.data;
    },
    onSuccess: () => {
      toast.success("Product added to cart");
      queryClient.invalidateQueries({ queryKey: ["cartCount"] });
    },
    onError: () => {
      toast.error("Error adding product to cart");
    },
  });

  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group overflow-hidden">
      <Link
        to={"/products/" + product.id}
        className="relative block h-64 overflow-hidden"
      >
        <img
          src={
            product.image || "https://via.placeholder.com/300x300?text=No+Image"
          }
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {product.tag && (
          <span className="absolute top-3 left-3 badge badge-secondary font-bold p-3 shadow-lg z-10">
            {product.tag}
          </span>
        )}
      </Link>

      <div className="card-body p-5">
        <h3 className="card-title text-lg font-bold line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-base-content/60 line-clamp-2 min-h-10">
          {product.description}
        </p>

        <div className="card-actions justify-between items-center mt-4">
          <p className="text-xl font-black text-primary">${product.price}</p>
          <button
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
            className="btn btn-primary btn-sm md:btn-md gap-2 rounded-lg"
          >
            {mutation.isPending ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default React.memo(ProductCard);
