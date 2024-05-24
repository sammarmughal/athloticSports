import { callProducts } from '../../../lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { product_name, description, price, quantity_available, category, image_url } = req.body;
    const query = 'UPDATE products SET product_name = ?, description = ?, price = ?, quantity_available = ?, category = ?, image_url = ? WHERE sku_id = ?';
    const values = [product_name, description, price, quantity_available, category, image_url, id];
    
    try {
      await callProducts(query, values);
      res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  } else if (req.method === 'DELETE') {
    const query = 'DELETE FROM products WHERE sku_id = ?';
    const values = [id];
    
    try {
      await callProducts(query, values);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
