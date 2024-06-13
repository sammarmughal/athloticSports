// pages/api/orders/[orderId]/items.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const orderId = req.query.orderId;

  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [rows] = await connection.query('SELECT * FROM order_items WHERE order_id = ?', [orderId]);
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching order items:', error);
    res.status(500).json({ error: 'Error fetching order items' });
  } finally {
    connection.end();
  }
}
