import { axiosInstance } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router";
import { ShoppingBag, ChevronRight, Star, Home } from "lucide-react";
import { useState } from "react";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axiosInstance(`/products/${id}`);
      return response.data;
    },
  });

  if (!id)
    return (
      <div className="p-20 text-center text-error font-bold">
        Invalid Product ID
      </div>
    );

  if (isLoadingProduct)
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-infinity loading-lg text-primary"></span>
      </div>
    );

  const product = data.data;

  return (
    <section className="bg-base-100 min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto py-10 px-4 md:px-8">
        {/* --- Breadcrumbs --- */}
        <nav className="flex mb-8 py-2" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center text-base-content/60 hover:text-primary transition-colors"
              >
                <Home className="w-4 h-4 mr-1" /> Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-base-content/20" />
            <li>
              <Link
                to="/#categories"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Products
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-base-content/20" />
            <li className="text-base-content font-bold">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* --- Left: Balanced Image Section --- */}
          <div className="w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative group rounded-3xl bg-base-200 border border-base-300 overflow-hidden shadow-xl flex items-center justify-center p-8 aspect-square transition-all duration-500 hover:shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-xl transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="badge badge-primary font-bold px-4 py-3">
                  NEW
                </span>
              </div>
            </div>
          </div>

          {/* --- Right: Product Info --- */}
          <div className="flex flex-col">
            {/* Star Rating Fix */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-amber-400">
                {" "}
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? "fill-current" : "text-base-300 fill-none"}`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold opacity-50 uppercase tracking-widest">
                (48 Reviews)
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-base-content">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-black text-primary">
                ${product.price.toFixed(2)}
              </span>
              {/* Optional: Add a subtle stock status */}
              <div className="badge badge-success badge-outline font-bold">
                In Stock
              </div>
            </div>

            <p className="text-base-content/70 leading-relaxed mb-8 text-lg border-l-4 border-primary pl-4">
              {product.description}
            </p>

            {/* Config: Quantity & Size */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                  Size
                </span>
                <div className="flex gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="btn btn-sm btn-outline border-base-300 hover:btn-primary font-black rounded-lg w-10"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                  Quantity
                </span>
                <div className="join bg-base-200 rounded-xl border border-base-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="btn btn-ghost join-item btn-sm"
                  >
                    -
                  </button>
                  <span className="join-item flex items-center px-4 font-black">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="btn btn-ghost join-item btn-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary btn-lg flex-1 shadow-lg shadow-primary/20 rounded-2xl group">
                <ShoppingBag className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                ADD TO CART
              </button>
              <button className="btn btn-outline btn-lg rounded-2xl border-base-300">
                WISHLIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
