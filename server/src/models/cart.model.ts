import mongoose, { Schema, Types } from "mongoose";

export interface ICartItem {
  productId: Types.ObjectId;
  quantity: number;
}

export interface ICart {
  userId: Types.ObjectId;
  products: ICartItem[];
}

const cartSchema = new Schema<ICart>(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
    },

    products: [
      {
        productId: {
          type: Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          min: 1,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Cart = mongoose.model("CartItem", cartSchema);

export default Cart;
