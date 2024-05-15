import { fetchProducts } from '../lib/data';
import React from 'react';

export async function getServerSideProps() {
  try {
    const products = await fetchProducts();
    return { props: { products } };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } };
  }
}

/** Defining the types of columns in table Products
 * @typedef {Object} Product
 * @property {number} sku_id
 * @property {string} product_name
 * @property {string} description
 * @property {number} price
 * @property {number} quantity_available
 * @property {number} category_id
 * @property {string} image_url
 */

const TablePage = ({ products }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <h2>Products Table</h2>
      <table>
        <thead>
          <tr>
            <th>SKU ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity Available</th>
            <th>Category ID</th>
            <th>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.sku_id}>
              <td>{product.sku_id}</td>
              <td>{product.product_name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.quantity_available}</td>
              <td>{product.category_id}</td>
              <td>{product.image_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
