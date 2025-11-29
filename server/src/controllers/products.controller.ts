import Product from "../models/product.model";

const addProduct = async (req: any, res: any) => {
  try {
    const productData = req.body;

    const product = new Product(productData);
    await product.save();

    res
      .status(201)
      .json({ msg: "user added successfully", data: product, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const updateProduct = async (req: any, res: any) => {
  try {
    const allProducts = await Product.find({}, { __v: 0 });
    res.status(200).json({ msg: "success", data: allProducts, success: true });
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteProduct = async (req: any, res: any) => {
  try {
    const allProducts = await Product.find({}, { __v: 0 });
    res.status(200).json({ msg: "success", data: allProducts, success: true });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getProducts = async (req: any, res: any) => {
  try {
    const allProducts = await Product.find({}, { __v: 0 });
    res.status(200).json({ msg: "success", data: allProducts, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
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

    res.status(200).json({ msg: "success", data: Product, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const deleteAllProducts = async (req: any, res: any) => {
  try {
    await Product.deleteMany({});
    res.status(200).json({ msg: "success", data: null, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

export {
  getProducts,
  deleteAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
