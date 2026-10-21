import Product from "../model/productModel.js";

export default async function createProduct(req, res) {
  try {
    console.log(req.body);
    const { name, price, description } = req.body;
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Upload an image",
      });
    }
    const product = new Product({
      name,
      price: Number(price),
      description: description || "",
      image: `/uploads/${req.file.filename}`,
    });
    const savedProduct = await product.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
