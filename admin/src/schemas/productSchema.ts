import * as z from "zod";

export const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string().nonempty("Name is required").min(2, "Too Short"),
  category: z.string().nonempty("Category is required").min(2, "Too Short"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  image: z.any().refine((files) => files?.length === 1, "Image is required"),
  // .file()
  // .refine((file) => file.size < 1024 * 1024 * 5, {
  //   message: "Image size must be less than 5MB",
  // })
  // .refine(
  //   (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
  //   {
  //     message: "Image must be a JPEG",
  //   }
  // ),
  description: z
    .string()
    .nonempty("Description is required")
    .min(2, "Too Short"),
  inStock: z.coerce.boolean(),
  quantity: z.coerce.number().min(1, "Quantity must be greater than 0"),
});

export type IProductFormInput = z.input<typeof ProductSchema>;
export type IProductForm = z.output<typeof ProductSchema>;
