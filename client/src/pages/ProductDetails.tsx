import { axiosInstance } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axiosInstance(`/products/${id}`);
      return response.data;
    },
  });

  if (isLoadingProduct) return <p>Loading...</p>;

  const product = data.data;

  return (
    <section className="max-w-5xl mx-auto py-24 px-4 md:px-0">
      <div className="grid md:grid-cols-2 gap-0 md:gap-10 rounded-xl overflow-hidden shadow-md">
        <div className="flex items-center justify-center bg-white/5 rounded-3xl p-6 ">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>

        <div className="flex flex-col justify-between p-4">
          <div>
            <h1 className="text-xl md:text-3xl font-bold mb-4 text-primary-light leading-tight tracking-wide">
              {product.name}
            </h1>
            <p className="text-lg mb-6 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mb-6">
            <p className="mb-2 font-medium">Quantity</p>
            <div className="mb-4 w-40 flex items-center justify-between bg-base-200 rounded-full overflow-hidden border border-gray-300 shadow-sm">
              <button className="cursor-pointer w-10 h-10 flex items-center justify-center bg-primary-dark text-base-light hover:bg-primary-light transition-all">
                -
              </button>

              <input
                type="number"
                placeholder="1"
                className="w-16 text-center text-lg font-medium outline-none border-none bg-transparent focus:ring-2 focus:ring-primary-dark rounded transition-all"
              />

              <button className="cursor-pointer w-10 h-10 flex items-center justify-center bg-primary-dark text-base-light hover:bg-primary-light transition-all">
                +
              </button>
            </div>

            <p className="mb-2 font-medium">Size</p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border rounded-full hover:text-base-light hover:bg-primary-light transition-all transform hover:scale-105"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold mb-4 text-primary-light">
              ${product.price}
            </p>

            <button className="btn bg-primary-dark text-base-light hover:bg-primary-light transition-all rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
