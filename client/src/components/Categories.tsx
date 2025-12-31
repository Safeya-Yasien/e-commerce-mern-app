import { axiosInstance } from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import type { IProduct } from "@/types/product.types";
import { useState } from "react";

const Categories = () => {
  const [category, setCategory] = useState<string | null>(null);

  const {
    data: products,
    isLoading: isLoadingProducts,
    error: errorProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosInstance(
        `/products?limit=8${category ? "&category=" + category : ""}`
      );
      return response.data;
    },
  });

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axiosInstance("/products/categories");
      return response.data;
    },
  });

  const handleFilter = (category: string) => {
    setCategory(category.toLowerCase());
    console.log("category", category);
  };

  if (isLoadingProducts) return <p>Loading...</p>;
  if (errorProducts) return <p>Error fetching products</p>;

  if (isLoadingCategories) return <p>Loading...</p>;
  if (errorCategories) return <p>Error fetching categories</p>;

  return (
    <section className="py-20 text-base-content" id="categories">
      <div className="text-center mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Categories</h2>
      </div>

      <div className="mb-14 max-w-7xl text-center mx-auto flex items-center justify-center gap-6 flex-wrap ">
        {categories.data.map((category: string) => (
          <button
            onClick={() => handleFilter(category)}
            className="btn bg-secondary text-base-100  rounded-lg"
            key={category}
          >
            {category}
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
