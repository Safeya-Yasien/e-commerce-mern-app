import type { IProduct, IProductsResponse } from "@/types/product.types";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { DeleteButton } from "../actions";
import { isAdmin } from "@/utils";
import { toast } from "react-toastify";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/products`;

const ProductsList = () => {
  const navigate = useNavigate();
  const admin = isAdmin();

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<IProductsResponse>({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}?limit=8`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      return await response.json();
    },
  });

  const viewProduct = (id: string) => {
    navigate(`/products/${id}`);
  };

  const editProduct = (id: string) => {
    navigate(`/products/update/${id}`);
  };

  if (isLoading) return <p className="text-gray-400">Loading products...</p>;
  if (isError) throw error;

  return (
    <div className="bg-[#252A30] rounded-2xl p-6 overflow-auto h-full">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-gray-300 text-left border-b border-gray-700">
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">Price</th>
            <th className="p-3">Image</th>
            <th className="p-3">Description</th>
            <th className="p-3">inStock</th>
            <th className="p-3">Stock Quantity</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products?.data.map((product: IProduct, index: number) => (
            <tr
              key={product.id}
              className="text-gray-200 border-b border-gray-700 hover:bg-[#2F343B] transition"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.price}</td>
              <td className="p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 max-h-12 object-cover rounded-md"
                />
              </td>
              <td className="p-3 w-48 overflow-hidden">
                <div className=" line-clamp-2 ">{product.description}</div>
              </td>
              <td className="p-3">{product.inStock ? "Yes" : "No"}</td>
              <td className="p-3 ">{product.quantity}</td>

              <td className="p-3 ">
                <div className="flex items-center gap-2 ">
                  {admin ? (
                    <button
                      onClick={() => editProduct(product.id)}
                      className="cursor-pointer px-3 py-1 bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 flex items-center gap-1"
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        toast.error("You are not authorized to edit this item")
                      }
                      className="cursor-not-allowed px-3 py-1 bg-gray-600 rounded-md text-white text-sm"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => viewProduct(product.id)}
                    className="cursor-pointer px-3 py-1 bg-green-600 rounded-md text-white text-sm hover:bg-green-500 flex items-center gap-1"
                  >
                    View
                  </button>

                  <DeleteButton
                    id={product.id}
                    baseUrl={BASE_URL}
                    label={"product"}
                    itemName={product.name}
                    queryKey={"product"}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
