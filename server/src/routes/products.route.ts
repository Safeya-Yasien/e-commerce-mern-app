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
import multerMiddleware from "../middlewares/multerMiddleware";

router.get("/", getProducts);
router.post("/add", multerMiddleware, addProduct);
router.put("/update/:id", multerMiddleware, updateProduct);
router.get("/:id", getProductById);
router.delete("/delete/:id", deleteProduct);
router.delete("/", deleteAllProducts);

export default router;
