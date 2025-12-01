import mongoose, { Schema } from "mongoose";

export interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  category: {
    type: String,
    required: [true, "Please select a category"],
    enum: ["Electronics", "Toys", "Clothing", "Books", "Sports"],
  },
  price: {
    type: Number,
    required: [true, "Please enter a price"],
    min: 0,
  },
  image: {
    type: String,
    required: [true, "Please enter an image"],
  },
  description: {
    type: String,
    required: [true, "Please enter a description"],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
