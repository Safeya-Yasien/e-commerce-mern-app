import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/products`;

interface IProduct {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

const ProductsList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: products } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      try {
        const response = await fetch(`${BASE_URL}`);

        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        return await response.json();
      } catch (err) {
        console.error("Fetch products failed:", err);
        throw err;
      }
    },
  });

  const deleteProduct = useMutation({
    mutationFn: async (_id: string) => {
      return await fetch(`${BASE_URL}/delete/${_id}`, { method: "DELETE" });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

  const viewProduct = (id: string) => {
    navigate(`/products/${id}`);
  };

  const editProduct = (id: string) => {
    navigate(`/products/edit-product/${id}`);
  };

  return (
    <div className="bg-[#252A30] rounded-2xl p-6 overflow-auto h-full">
      <h2 className="text-white text-xl font-semibold mb-4">Products</h2>

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
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products?.data.map((product: IProduct, index: number) => (
            <tr
              key={product._id}
              className="text-gray-200 border-b border-gray-700 hover:bg-[#2F343B] transition"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.category}</td>
              <td className="p-3">{product.price}</td>
              <td className="p-3">{product.image}</td>
              <td className="p-3">{product.description}</td>
              <td className="p-3">{product.inStock ? "Yes" : "No"}</td>

              <td className="p-3 flex space-x-2">
                <button
                  onClick={() => editProduct(product._id)}
                  className="cursor-pointer px-3 py-1 bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 flex items-center gap-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct.mutate(product._id)}
                  className="cursor-pointer px-3 py-1 bg-red-600 rounded-md text-white text-sm hover:bg-red-500 flex items-center gap-1"
                >
                  Delete
                </button>
                <button
                  onClick={() => viewProduct(product._id)}
                  className="cursor-pointer px-3 py-1 bg-green-600 rounded-md text-white text-sm hover:bg-green-500 flex items-center gap-1"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
