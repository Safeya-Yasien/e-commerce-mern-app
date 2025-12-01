import * as z from "zod";

export interface IProductInput {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  inStock: "true" | "false";
}

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

export type IProductForm = z.infer<typeof ProductSchema>;
