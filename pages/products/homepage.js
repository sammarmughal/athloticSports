import React from 'react';

export default function HomePage({ products }) {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.sku_id}>
                        <h3>{product.product_name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Quantity Available: {product.quantity_available}</p>
                        <p>Category: {product.category}</p>
                        <p>Slug: {product.slug}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        // Fetch data from your database here
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();
        
        return { props: { products } };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { products: [] } }; // Return an empty array if there's an error
    }
}
