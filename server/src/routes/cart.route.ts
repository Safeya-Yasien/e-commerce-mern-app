import express from "express";
const router = express.Router();

import {
  getCart,
  addToCart,
  getCartCount,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../controllers/cart.controller";
import authMiddleware from "../middlewares/authMiddleware";

router.get("/", authMiddleware, getCart);
router.post("/add", authMiddleware, addToCart);
router.get("/count", authMiddleware, getCartCount);
router.put("/update", authMiddleware, updateCartItem);
router.delete("/remove/:id", authMiddleware, removeFromCart);
router.delete("/clear", authMiddleware, clearCart);

export default router;
