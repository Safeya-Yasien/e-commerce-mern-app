import mongoose, { Schema } from "mongoose";

export interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  quantity: number;
}

const productSchema = new Schema<IProduct>(
  {
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
    quantity: {
      type: Number,
      required: [true, "Please enter stock quantity"],
      default: 1,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },

    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete (ret as any)._id;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
    },
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
