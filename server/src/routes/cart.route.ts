import express from "express";
const router = express.Router();

import {
  getCart,
  addToCart,
  updateProductCartQuantity,
  removeCartProduct,
  removeCart,
} from "../controllers/cart.controller";
import authMiddleware from "../middlewares/authMiddleware";

router.get("/", getCart);
router.post("/add", authMiddleware, addToCart);
router.put("/:id", updateProductCartQuantity);
router.delete("/:id", authMiddleware, removeCartProduct);
router.delete("/", authMiddleware, removeCart);

export default router;
