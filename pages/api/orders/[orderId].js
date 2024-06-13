// pages/api/orders/[orderId].js

import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

export default async function handler(req, res) {
  const orderId = req.query.orderId;
  const { status } = req.body;

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

  try {
    await connection.execute('UPDATE orders SET status = ? WHERE orderId = ?', [status, orderId]);
    res.status(200).end();
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Error updating order status' });
  } finally {
    connection.end();
  }
}
