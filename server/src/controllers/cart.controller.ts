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
    const productObjectId = new mongoose.Types.ObjectId(productId);

    if (!productId || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ message: "productId and quantity required" });
    }

    const result = await Cart.updateOne(
      {
        userId,
        "products.productId": new mongoose.Types.ObjectId(productId),
        ...(quantity < 0 && { "products.quantity": { $gt: 1 } }),
      },
      {
        $inc: { "products.$.quantity": quantity },
      }
    );

    res.status(200).json({ msg: "success", data: result, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const removeFromCart = async (req: any, res: any) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const productObjectId = new mongoose.Types.ObjectId(id);

    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $pull: { products: { productId: productObjectId } } },
      { new: true }
    );

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

const getCartCount = async (req: any, res: any) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).select("products");
    if (!cart) {
      return res.status(404).json({
        msg: "Cart not found",
        data: { items: 0, count: 0 },
        success: false,
      });
    }

    const items = cart.products.length;
    const count = cart.products.reduce((acc, item) => acc + item.quantity, 0);

    res
      .status(200)
      .json({ msg: "success", data: { items, count }, success: true });
  } catch (err) {
    console.error("Get cart count error:", err);
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

export {
  getCart,
  updateCartItem,
  addToCart,
  removeFromCart,
  clearCart,
  getCartCount,
};
