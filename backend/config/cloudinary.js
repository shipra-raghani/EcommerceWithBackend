import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Upload a file buffer (from multer memoryStorage) to Cloudinary
export function uploadToCloudinary(buffer, folder = "ecommerce/products") {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => (error ? reject(error) : resolve(result))
    );
    stream.end(buffer);
  });
}

// Delete an image from Cloudinary using its public_id
export function deleteFromCloudinary(publicId) {
  return cloudinary.uploader.destroy(publicId, { resource_type: "image" });
}

export default cloudinary;
