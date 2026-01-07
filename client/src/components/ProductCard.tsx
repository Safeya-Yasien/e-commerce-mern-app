import type { IProduct } from "@/types/product.types";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Link
      to={"/products/" + product.id}
      className="bg-base-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-sunstone text-base-light text-xs font-semibold px-2 py-1 rounded">
            {product.tag}
          </span>
        )}
      </div>
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
          <button className="cursor-pointer flex items-center gap-1 bg-primary-light text-base-light py-1 p-2 rounded-lg font-semibold hover:bg-primary-dark transition text-sm">
            <ShoppingBag className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
