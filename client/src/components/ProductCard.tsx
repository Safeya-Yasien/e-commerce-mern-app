import { axiosInstance } from "@/api/axios";
import type { IProduct } from "@/types/product.types";
import { useMutation } from "@tanstack/react-query";
import { ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: IProduct }) => {
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
    },
    onError: () => {
      toast.error("Error adding product to cart");
    },
  });

  return (
    <div className="bg-base-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
      <Link to={"/products/" + product.id} className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-sunstone text-base-light text-xs font-semibold px-2 py-1 rounded">
            {product.tag}
          </span>
        )}
      </Link>
      <div className="p-4 flex flex-col justify-between h-40">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-primary-light">
            {product.name}
          </h3>
          <p className="line-clamp-2 text-sm text-neutral-light">
            {product.description}
          </p>
        </div>
        <div className="flex items-center  justify-between">
          <p className="text-primary-light font-bold text-lg ">
            {product.price}$
          </p>
          <button
            onClick={() => mutation.mutate()}
            className="cursor-pointer flex items-center gap-1 bg-primary-light text-base-light py-1 p-2 rounded-lg font-semibold hover:bg-primary-dark transition text-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default React.memo(ProductCard);
