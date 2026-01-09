import mongoose from "mongoose";
import Cart from "../models/cart.model";

const getCart = async (req: any, res: any) => {
  try {
    const cartItems = await Cart.find({});
    res.status(200).json({ msg: "success", data: cartItems, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};
const addToCart = async (req: any, res: any) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    if (!productId) {
      return res.status(400).json({ message: "productId required" });
    }

    let cart = await Cart.findOne({ userId });

    const qty = quantity || 1;
    const productObjectId = new mongoose.Types.ObjectId(productId);

    if (!cart) {
      cart = await Cart.create({
        userId,
        products: [{ productId: productObjectId, quantity: qty }],
      });
    } else {
      const item = cart.products.find(
        (i) => i.productId && i.productId.equals(productObjectId)
      );

      if (item) {
        item.quantity += qty;
      } else {
        cart.products.push({ productId: productObjectId, quantity: qty });
      }

      await cart.save();
    }

    res.status(200).json({ msg: "success", data: cart, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const updateProductCartQuantity = async (req: any, res: any) => {
  try {
    res.status(200).json({ msg: "success", data: "l", success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const removeCartProduct = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    const productId = req.params.id;

    const productObjectId = new mongoose.Types.ObjectId(productId);

    const cart = await Cart.findOneAndDelete({
      userId,
      "products.productId": productObjectId,
    });

    if (!cart) {
      res
        .status(404)
        .json({ msg: "Cart not found", data: null, success: false });
      return;
    }

    res.status(200).json({ msg: "success", data: cart, success: true });
  } catch (err) {
    console.error("Remove cart product error:", err);
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const removeCart = async (req: any, res: any) => {
  try {
    const userId = req.user.id;

    const deletedCart = await Cart.deleteMany({ userId });

    if (!deletedCart) {
      res
        .status(404)
        .json({ msg: "Cart not found", data: null, success: false });
      return;
    }

    res
      .status(200)
      .json({ msg: "Cart deleted successfully", data: null, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

export {
  getCart,
  updateProductCartQuantity,
  addToCart,
  removeCartProduct,
  removeCart,
};
