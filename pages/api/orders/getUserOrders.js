import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      console
      const [orders] = await connection.execute('SELECT * FROM orders');
      const totalOrders = orders.length;
      const totalAmount = orders.reduce((acc, order) => acc + order.total_amount, 0);
      res.status(200).json({ orders, totalOrders, totalAmount });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
