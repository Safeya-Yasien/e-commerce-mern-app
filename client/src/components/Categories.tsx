import { axiosInstance } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import type { IProduct } from "@/types/product.types";

const Categories = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosInstance("/products");
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="py-20 text-base-content" id="categories">
      <div className="text-center mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Categories</h2>
      </div>

      <div className="mb-14 max-w-7xl text-center mx-auto flex items-center justify-center gap-6 flex-wrap ">
        {products.data.map((category: IProduct, index: number) => (
          <button
            className="btn bg-secondary text-base-100  rounded-lg"
            // key={category}
            key={index}
          >
            {category.category}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.data?.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
