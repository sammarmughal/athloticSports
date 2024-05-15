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
