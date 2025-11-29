import express from "express";
const router = express.Router();
import {
  deleteAllProducts,
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller";

router.post("/add", addProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/", deleteAllProducts);

export default router;
