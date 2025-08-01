// src/middlewares/upload.middleware.js
import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Define multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const username = req.member?.email || 'default_user'; // safer than name due to spaces
    const folderPath = path.join('../uploads', username);

    // Create folder if not exists
    fs.mkdirSync(folderPath, { recursive: true });

    cb(null, folderPath);
  },
  filename: function (req, file, cb) {
    cb(null, 'profile.jpg'); // always overwrite
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

const upload = multer({ storage, fileFilter });

export { upload };
