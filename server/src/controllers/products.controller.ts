import cloudinary from "../lib/cloudinary";
import Product from "../models/product.model";

const getProducts = async (req: any, res: any) => {
  try {
    const limit = req.query.limit || 4;
    const category = req.query.category;

    let filter: any = {};

    if (category) {
      filter.category = category;
    }
    const allProducts = await Product.find(filter, { __v: 0 }).limit(limit);

    res.status(200).json({ msg: "success", data: allProducts, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const getCategories = async (req: any, res: any) => {
  try {
    const allCategories = await Product.distinct("category", { __v: 0 });
    res
      .status(200)
      .json({ msg: "success", data: allCategories, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const getProductsCount = async (req: any, res: any) => {
  try {
    const count = await Product.countDocuments();
    res.status(200).json({ msg: "success", data: count, success: true });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error getting users count", data: err, success: false });
  }
};

const addProduct = async (req: any, res: any) => {
  try {
    const productData = req.body;
    const category = req.body.category?.trim().toLowerCase();

    let image = null;

    if (req.file) {
      const uploadedImage: any = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "products",
          },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });
      image = uploadedImage.secure_url;
    }

    const product = new Product({ ...productData, category, image });
    await product.save();

    res.status(201).json({
      msg: "product added successfully",
      data: product,
      success: true,
    });
  } catch (err) {
    console.error("Add product error:", err);
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const updateProduct = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    if (!id) {
      res
        .status(400)
        .json({ msg: "Please provide a valid id", data: null, success: false });
      return;
    }

    const product = await Product.findById(id);

    if (!product) {
      res
        .status(404)
        .json({ msg: "Product not found", data: null, success: false });
      return;
    }

    let image = product.image;

    if (req.file) {
      const uploadedImage: any = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "products",
          },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });
      image = uploadedImage.secure_url;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...req.body, image },
      { new: true, runValidators: true }
    );

    res
      .status(200)
      .json({ msg: "success", data: updatedProduct, success: true });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getProductById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id, { __v: 0 });
    if (!product) {
      res
        .status(404)
        .json({ msg: "Product not found", data: null, success: false });
      return;
    }

    res.status(200).json({ msg: "success", data: product, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const deleteProduct = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    if (!id) {
      res
        .status(400)
        .json({ msg: "Please provide a valid id", data: null, success: false });
      return;
    }

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res
        .status(404)
        .json({ msg: "Product not found", data: null, success: false });
      return;
    }

    res
      .status(200)
      .json({ msg: "Product deleted successfully", data: null, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const deleteAllProducts = async (req: any, res: any) => {
  try {
    await Product.deleteMany({});
    res
      .status(200)
      .json({ msg: "Deleted all products success", data: null, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

export {
  getProducts,
  getCategories,
  getProductsCount,
  deleteAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
