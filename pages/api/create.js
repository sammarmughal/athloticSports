import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'your-database-host',
  user: 'your-database-username',
  password: 'your-database-password',
  database: 'your-database-name',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, address, city, state, postalCode, total_amount, products } = req.body;

    try {
      // Start a transaction
      await db.query('START TRANSACTION');

      // Insert the order details
      const [orderResult] = await db.query(
        `INSERT INTO orders (username, email, address, city, state, postalCode, total_amount)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [username, email, address, city, state, postalCode, total_amount]
      );

      const orderId = orderResult.insertId;

      // Insert each product related to the order
      const productInserts = products.map(product => [
        orderId,
        product.product_name,
        product.price,
        product.quantity,
        product.image_url,
        product.category,
        product.sku_id,
      ]);

      await db.query(
        `INSERT INTO order_products (order_id, product_name, price, quantity, image_url, category, sku_id)
        VALUES ?`,
        [productInserts]
      );

      // Commit the transaction
      await db.query('COMMIT');

      res.status(200).json({ message: 'Order created successfully', orderId });
    } catch (error) {
      console.error(error);

      // Rollback the transaction in case of error
      await db.query('ROLLBACK');

      res.status(500).json({ error: 'Failed to create order' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
