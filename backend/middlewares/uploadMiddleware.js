// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';

// // Ensure uploads folder exists
// if (!fs.existsSync('uploads')) {
//   fs.mkdirSync('uploads');
// }

// // Multer Storage Configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     // Unique file name using timestamp + random number
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   }
// });

// // File filter (Only allow image formats)
// const fileFilter = (req, file, cb) => {
//   const allowedExtensions = /jpeg|jpg|png|webp/;
//   const isExtensionValid = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
//   const isMimeValid = allowedExtensions.test(file.mimetype);

//   if (isExtensionValid && isMimeValid) {
//     cb(null, true);
//   } else {
//     cb(new Error('Sirf images (jpeg, jpg, png, webp) upload kar sakte hain!'), false);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit  
// });

// export default upload;


import multer from 'multer';
import path from 'path';  

// Memory storage: file stays in RAM as req.file.buffer and is sent to Cloudinary.
// Nothing is written to the local disk.
const storage = multer.memoryStorage();

// File filter (Only allow image formats)
const fileFilter = (req, file, cb) => {
  const allowedExtensions = /jpeg|jpg|png|webp/;
  const isExtensionValid = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
  const isMimeValid = allowedExtensions.test(file.mimetype);

  if (isExtensionValid && isMimeValid) {
    cb(null, true);
  } else {
    cb(new Error('Sirf images (jpeg, jpg, png, webp) upload kar sakte hain!'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

export default upload;
