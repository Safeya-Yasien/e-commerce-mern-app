import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ProductCard from "../ProductCard";
import type { IProduct } from "@/types/product.types";
import { useState } from "react";
import { fetchProducts } from "@/api/products";
import { fetchCategories } from "@/api/categories";
import CategoriesFilter from "./CategoriesFilter";

const Categories = () => {
  const [category, setCategory] = useState<string | null>(null);

  const {
    data: products,
    isLoading: isLoadingProducts,
    error: errorProducts,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: () => fetchProducts(category),
    placeholderData: keepPreviousData,
  });

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

  if (isLoadingProducts || isLoadingCategories) return <p>Loading...</p>;
  if (errorProducts || errorCategories) return <p>Error fetching categories</p>;

  return (
    <section className="px-4 py-20 text-base-content" id="categories">
      <div className="text-center mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sunstone">
          Categories
        </h2>
      </div>

      <CategoriesFilter
        categories={categories.data}
        active={category}
        onChange={setCategory}
      />

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.data?.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
