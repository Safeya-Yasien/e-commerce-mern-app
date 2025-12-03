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

router.get("/", getProducts);
router.post("/add", addProduct);
router.put("/update/:id", updateProduct);
router.get("/:id", getProductById);
router.delete("/delete/:id", deleteProduct);
router.delete("/", deleteAllProducts);

export default router;
