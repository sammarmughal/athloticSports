
import { callProducts } from './db';
import { Product } from './definitions';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const query = "SELECT * FROM products";
    const products = await callProducts(query, []);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error('Failed to fetch products data.');
  }
}
