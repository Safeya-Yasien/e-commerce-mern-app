import { ProductSchema, type IProductForm } from "@/schemas/productSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/products`;

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProductForm>({
    resolver: zodResolver(ProductSchema),
  });

  const mutation = useMutation({
    mutationFn: async (formData: IProductForm) => {
      return await fetch(`${BASE_URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () => {
      toast.success(`Product added  successfully!`);
      reset();
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (data: IProductForm) => {
    mutation.mutate(data);
  };

  return (
    <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Left Column */}
      <div className="space-y-4">
        {/* Name */}
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Enter product name"
          className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          required
        />
        {errors && <p className="text-red-500">{errors.name?.message}</p>}

        {/* Category */}
        <div>
          <label className="text-gray-300 mb-1 block">Category</label>
          <select
            className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500`}
            {...register("category", { required: true })}
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

        {/* Price */}
        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="Enter product price"
          className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          required
          min={0}
        />

        {/* Image */}
        <input
          type="text"
          {...register("image", { required: true })}
          placeholder="Enter product image"
          className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          required
        />

        {/* Description */}
        <textarea
          {...register("description", { required: true })}
          placeholder="Enter product description"
          className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          required
        />

        {/* inStock */}
        <div>
          <label className="text-gray-300 mb-1 block">inStock</label>
          <select
            className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500`}
            {...register("inStock", { required: true })}
          >
            <option value="">Select inStock</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          {errors && <p className="text-red-500">{errors.inStock?.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex items-end mt-11">
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md font-semibold transition"
          >
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddProductForm;
