import { callProducts } from './db';

export async function fetchProducts() {
  try {
    const query = "SELECT * FROM products";
    const products = await callProducts(query, []);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error('Failed to fetch products data.');
  }
}

export const fetchProductById = async (id) => {
  const query = 'SELECT * FROM products WHERE sku_id = ?';
  const values = [id];

  try {
    const [product] = await callProducts(query, values);
    return product;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
};
