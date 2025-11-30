import * as z from "zod";

export const ProductSchema = z.object({
  name: z.string().nonempty("Name is required").min(2, "Too Short"),
  category: z.string().nonempty("Category is required").min(2, "Too Short"),
  price: z.number(),
  image: z.string().nonempty("Image is required").min(2, "Too Short"),
  description: z
    .string()
    .nonempty("Description is required")
    .min(2, "Too Short"),
  inStock: z.boolean(),
});

export type IProductForm = z.infer<typeof ProductSchema>;
