import * as z from "zod";

export const ProductSchema = z.object({
  name: z.string().nonempty("Name is required").min(2, "Too Short"),
  category: z.string().nonempty("Category is required").min(2, "Too Short"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  image: z.string().nonempty("Image is required").min(2, "Too Short"),
  description: z
    .string()
    .nonempty("Description is required")
    .min(2, "Too Short"),
  inStock: z.coerce.boolean(),
});

export type IProductFormInput = z.input<typeof ProductSchema>;
export type IProductForm = z.output<typeof ProductSchema>;
