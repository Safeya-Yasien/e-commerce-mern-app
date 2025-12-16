import express from "express";
const router = express.Router();
import {
  deleteAllProducts,
  getProducts,
  getProductsCount,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller";
import multerMiddleware from "../middlewares/multerMiddleware";
import authMiddleware from "../middlewares/authMiddleware";
import roleMiddleware from "../middlewares/roleMiddleware";

router.get("/", authMiddleware, getProducts);
router.get("/", authMiddleware, getProductsCount);
router.post(
  "/add",
  authMiddleware,
  roleMiddleware(["admin"]),
  multerMiddleware,
  addProduct
);
router.put(
  "/update/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  multerMiddleware,
  updateProduct
);
router.get("/:id", authMiddleware, getProductById);
router.delete(
  "/delete/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  deleteProduct
);
router.delete(
  "/",
  authMiddleware,
  roleMiddleware(["admin"]),
  deleteAllProducts
);

export default router;
