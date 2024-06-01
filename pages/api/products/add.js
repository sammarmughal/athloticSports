import nextConnect from 'next-connect';
import multer from 'multer';
import path from 'path';
import { callProducts } from '../../../lib/db';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.error(`Error: ${error.message}`);
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

apiRoute.use(upload.single('image'));

apiRoute.post(async (req, res) => {
  const {
    product_name,
    category,
    description,
    price,
    quantity_available,
    sku_id
  } = req.body;

  const image_url = `/uploads/${req.file.filename}`;

  const query = `
    INSERT INTO products (product_name, category, description, price, quantity_available, image_url, sku_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [product_name, category, description, price, quantity_available, image_url, sku_id];

  try {
    console.log("Executing query:", query);
    console.log("With values:", values);

    await callProducts(query, values);
    res.status(200).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
