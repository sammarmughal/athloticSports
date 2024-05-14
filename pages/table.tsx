import { fetchProducts } from '../lib/data';
import { Product } from '../lib/definitions';
import { GetServerSideProps } from 'next';

interface TablePageProps {
  products: Product[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const products = await fetchProducts();
    return { props: { products } };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } };
  }
};

const TablePage: React.FC<TablePageProps> = ({ products }) => {
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
