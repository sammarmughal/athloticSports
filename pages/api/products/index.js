// /pages/api/products/index.js
import { callProducts } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const query = 'SELECT * FROM products';
    try {
      const products = await callProducts(query, []);
      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
