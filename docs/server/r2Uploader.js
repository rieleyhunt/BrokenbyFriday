// r2Uploader.js
const express = require('express'); // Used to 
const multer = require('multer');
const AWS = require('aws-sdk');
const router = express.Router();
require('dotenv').config(); // ← THIS IS ENOUGH in this folder structure


// Upload destination: memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

console.log('ID:', process.env.R2_ACCESS_KEY_ID);
console.log('SECRET:', process.env.R2_SECRET_ACCESS_KEY);

// Your R2 configuration
const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint('https://56cd80b33b68f5cc6054c3e4b6c548e2.r2.cloudflarestorage.com'),
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
  region: 'auto'
});

const BUCKET_NAME = 'bbf-assets/assets';

// Route to upload a file
router.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;

  if (!file) return res.status(400).json({ error: 'No file uploaded' });

  const params = {
    Bucket: BUCKET_NAME,
    Key: file.originalname, // You can customize this
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read' // Optional: make the file publicly accessible
  };

  try {
    const result = await s3.upload(params).promise();
    res.json({ message: 'Upload successful', url: result.Location });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

module.exports = router;
