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

export async function fetchProductById(sku_id) {
  try {
    console.log("Fetching product with SKU ID:", sku_id);
    const query = "SELECT * FROM products WHERE sku_id = ?";
    const product = await callProducts(query, [sku_id]);
    console.log("Product fetched successfully:", product);
    return product[0]; // Assuming it returns an array with one product
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw new Error('Failed to fetch product data.');
  }
}
