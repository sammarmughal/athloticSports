import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    // Fetch orders for the given username
    const [orders] = await connection.execute(
      'SELECT * FROM orders WHERE username = ?', [username]
    );

    if (orders.length === 0) {
      return res.status(200).json([]);
    }

    // Fetch order items for each order
    const orderIds = orders.map(order => order.order_id);
    const [orderItems] = await connection.query(
      `SELECT * FROM order_items WHERE order_id IN (${orderIds.join(',')})`
    );

    // Map order items to their respective orders
    const ordersWithItems = orders.map(order => ({
      ...order,
      items: orderItems.filter(item => item.order_id === order.order_id),
    }));

    res.status(200).json(ordersWithItems);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
