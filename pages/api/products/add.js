import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../../../lib/db';

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const category = req.body.category ? req.body.category.toLowerCase().replace(/ /g, '_') : 'uncategorized';
    const dir = path.join(process.cwd(), 'public', 'images', 'products', category);

    // Ensure directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  upload.single('image')(req, res, async (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ message: 'Failed to upload image' });
    }

    try {
      const { product_name, category, description, price, quantity_available, sku_id } = req.body;

      if (!product_name || !category || !description || !price || !quantity_available || !sku_id || !req.file) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const image_url = `/images/products/${category.toLowerCase().replace(/ /g, '_')}/${req.file.filename}`;

      // Insert the product into the database
      const result = await query(
        'INSERT INTO products (product_name, category, description, price, quantity_available, sku_id, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [product_name, category, description, price, quantity_available, sku_id, image_url]
      );

      return res.status(200).json({ message: 'Product added successfully' });
    } catch (error) {
      console.error('Failed to add product:', error);
      return res.status(500).json({ message: 'Failed to add product' });
    }
  });
};

export default handler;
