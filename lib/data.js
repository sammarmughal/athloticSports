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
    return product[0]; 
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw new Error('Failed to fetch product data.');
  }
}
export async function fetchCategories() {
  try {
    const query = "SELECT DISTINCT category FROM products";
    const categories = await callProducts(query, []);
    return categories.map(category => category.category);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error('Failed to fetch categories data.');
  }
}
