// import Product from "../model/productModel.js";

// export default async function createProduct(req, res) {
//   try {
//     console.log(req.body);
//     const { name, price, description } = req.body;
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Upload an image",
//       });
//     }
//     const product = new Product({
//       name,
//       price: Number(price),
//       description: description || "",
//       image: `/uploads/${req.file.filename}`,
//     });
//     const savedProduct = await product.save();
//     res.status(201).json({
//       success: true,
//       message: "Product created successfully",
//       product: savedProduct,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// }

import Product from "../model/productModel.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../config/cloudinary.js";

export default async function createProduct(req, res) {
  let uploaded = null;
  try {
    const { name, price, description } = req.body;
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Upload an image",
      });
    }

    // Upload image buffer to Cloudinary
    uploaded = await uploadToCloudinary(req.file.buffer);

    const product = new Product({
      name,
      price: Number(price),
      description: description || "",
      image: uploaded.secure_url,
      imagePublicId: uploaded.public_id,
    });
    const savedProduct = await product.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (error) {
    // If the image was uploaded but saving the product failed, remove the image
    if (uploaded?.public_id) {
      await deleteFromCloudinary(uploaded.public_id).catch(() => {});
    }
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
