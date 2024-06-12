import mysql from 'mysql2/promise';
import 'dotenv/config';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { username } = req.query;

    try {
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
      });

      const [orders] = await connection.execute(
        'SELECT * FROM orders WHERE username = ?',
        [username]
      );

      // Convert total_amount to a number
      const formattedOrders = orders.map(order => ({
        ...order,
        total_amount: Number(order.total_amount)
      }));

      connection.end();

      res.status(200).json({ success: true, orders: formattedOrders });
    } catch (error) {
      console.error("Error fetching orders:", error); // Log the error for debugging
      res.status(500).json({ success: false, message: 'Error fetching orders', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
