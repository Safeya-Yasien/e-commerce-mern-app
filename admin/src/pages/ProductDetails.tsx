import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/products`;

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: response,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/${id}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch product with ID: ${id}`);
      }
      return await res.json();
    },
  });

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen bg-[#1C1F24] text-gray-300">
        Loading product details...
      </div>
    );

  if (error || !response?.data)
    return (
      <div className="flex justify-center items-center h-screen bg-[#1C1F24] text-red-500">
        Error loading product details.
      </div>
    );

  const product = response.data;

  return (
    <div className="min-h-screen bg-[#1C1F24] text-white p-8">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Product Details Card */}
      <div className="max-w-4xl mx-auto bg-[#252A30] rounded-2xl p-8 shadow-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white border-b border-gray-700 pb-4">
          {product.name}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-[#2F343B] p-4 rounded-xl flex items-center justify-center h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Column 2 & 3: Details */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2F343B] p-4 rounded-xl md:col-span-2">
              <p className="text-gray-400 text-sm">Description</p>
              <p className="text-lg font-medium">
                {product.description || "No description provided."}
              </p>
            </div>

            <div className="bg-[#2F343B] p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Price</p>
              <p className="text-lg font-medium text-green-400">
                ${product.price ? product.price.toFixed(2) : "—"}
              </p>
            </div>

            <div className="bg-[#2F343B] p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Category</p>
              <p className="text-lg font-medium capitalize">
                {product.category || "—"}
              </p>
            </div>

            <div className="bg-[#2F343B] p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Stock Quantity</p>
              <p className="text-lg font-medium">
                {product.stockQuantity || "0"}
              </p>
            </div>

            <div className="bg-[#2F343B] p-4 rounded-xl">
              <p className="text-gray-400 text-sm">Created At</p>
              <p className="text-lg font-medium">
                {product.created_at
                  ? new Date(product.created_at).toLocaleDateString()
                  : "—"}
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate(`/products/update/${product.id}`)}
            className="cursor-pointer bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg text-white font-medium transition"
          >
            Edit Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
