import { ProductSchema, type IProductFormInput } from "@/schemas/productSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/products`;

const ProductForm = () => {
  const { id } = useParams();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProductFormInput>({
    resolver: zodResolver(ProductSchema),
  });

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      return data.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        inStock: product.inStock,
      });

      setTimeout(() => {
        setPreviewImage(product.image || null);
      }, 0);
    }
  }, [id, product, reset]);

  const mutation = useMutation({
    mutationKey: ["product", id],

    mutationFn: async (formData: FormData) => {
      const url = id ? `${BASE_URL}/update/${id}` : `${BASE_URL}/add`;
      const method = id ? "PUT" : "POST";

      return await fetch(url, {
        method,
        body: formData,
      });
    },
    onSuccess: () => {
      toast.success(`Product ${id ? "updated" : "added"}  successfully!`);
      reset();
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data: IProductFormInput) => {
    const parsed = ProductSchema.parse(data);

    const formData = new FormData();
    formData.append("name", parsed.name);
    formData.append("category", parsed.category);
    formData.append("price", parsed.price.toString());
    formData.append("description", parsed.description);
    formData.append("inStock", parsed.inStock.toString());
    formData.append("image", parsed.image[0]);

    mutation.mutate(formData);
  };

  if (isLoading) {
    return <p className="text-white">Loading product...</p>;
  }
  return (
    <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Left Column */}
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="text-gray-300 mb-1 block">Name</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Enter product name"
            className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          {errors && <p className="text-red-500">{errors.name?.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="text-gray-300 mb-1 block">Description</label>
          <textarea
            rows={1}
            {...register("description")}
            placeholder="Enter product description"
            className="resize-none w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          {errors && (
            <p className="text-red-500">{errors.description?.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="text-gray-300 mb-1 block">Price</label>
          <input
            type="number"
            {...register("price")}
            placeholder="Enter product price"
            className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          {errors && <p className="text-red-500">{errors.price?.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex items-end mt-11">
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md font-semibold transition"
          >
            {id ? "Update" : "Add"} Product
          </button>
        </div>
      </div>

      {/* right column */}
      <div className="space-y-4">
        {/* Category */}
        <div>
          <label className="text-gray-300 mb-1 block">Category</label>
          <select
            className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500`}
            {...register("category")}
          >
            <option value="">Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Toys">Toys</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Sports">Sports</option>
          </select>
          {errors && <p className="text-red-500">{errors.category?.message}</p>}
        </div>

        {/* inStock */}
        <div>
          <label className="text-gray-300 mb-1 block">inStock</label>
          <select
            className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500`}
            {...register("inStock")}
          >
            <option value="">Select inStock</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          {errors && <p className="text-red-500">{errors.inStock?.message}</p>}
        </div>

        {/* Image */}
        <div>
          <label className="text-gray-300 mb-1 block">Image</label>
          <input
            type="file"
            {...register("image")}
            className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setPreviewImage(URL.createObjectURL(file!));
            }}
          />

          {errors && (
            <p className="text-red-500">{errors.image?.message?.toString()}</p>
          )}

          {previewImage && (
            <div className="mt-2 flex justify-end">
              <label
                className="text-gray-300 mb-1 block sr-only"
                htmlFor="image"
              >
                Preview Image
              </label>
              <img
                src={previewImage}
                alt={"preview image"}
                className="w-32 h-32 object-cover rounded-md border border-gray-600"
              />
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
export default ProductForm;
