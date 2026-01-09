import mongoose from "mongoose";
import Cart from "../models/cart.model";

const getCart = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ userId }).populate("products.productId");

    if (!cart) {
      return res
        .status(404)
        .json({ msg: "Cart not found", data: null, success: false });
    }

    res.status(200).json({ msg: "success", data: cart, success: true });
  } catch (err) {
    console.error("Get cart error:", err);
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

    const qty = Math.max(1, Number(quantity) || 1);
    const productObjectId = new mongoose.Types.ObjectId(productId);

    let cart = await Cart.findOne({ userId });

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

const updateCartItem = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "productId required" });
    }

    const productObjectId = new mongoose.Types.ObjectId(productId);

    const cart = await Cart.findOne({
      userId,
      "products.productId": productObjectId,
    });

    if (!cart) {
      res
        .status(404)
        .json({ msg: "Cart not found", data: null, success: false });
      return;
    }

    const product = cart.products.find((p) =>
      p.productId.equals(productObjectId)
    );

    if (!product) {
      res
        .status(404)
        .json({ msg: "Product not found", data: null, success: false });
      return;
    }

    product.quantity = quantity;
    await cart.save();

    res.status(200).json({ msg: "success", data: cart, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const removeFromCart = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.params;

    const productObjectId = new mongoose.Types.ObjectId(productId);

    const cart = await Cart.findOne({
      userId,
      "products.productId": productObjectId,
    });

    if (!cart) {
      res
        .status(404)
        .json({ msg: "Cart not found", data: null, success: false });
      return;
    }

    const product = cart.products.find((p) =>
      p.productId.equals(productObjectId)
    );

    if (!product) {
      res
        .status(404)
        .json({ msg: "Product not found", data: null, success: false });
      return;
    }

    console.log("Removing product:", product);

    res.status(200).json({ msg: "success", data: cart, success: true });
  } catch (err) {
    console.error("Remove cart product error:", err);
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const clearCart = async (req: any, res: any) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId: req.user.id },
      { products: [] },
      { new: true }
    );

    if (!cart) {
      res
        .status(404)
        .json({ msg: "Cart not found", data: null, success: false });
      return;
    }

    res.status(200).json({ msg: "success", data: null, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

export { getCart, updateCartItem, addToCart, removeFromCart, clearCart };
