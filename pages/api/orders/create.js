import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, shipping_address, city, province, zip_code, phone, total_amount, order_items} = req.body;

      console.log(req.body) 

      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });

      await connection.beginTransaction();

      const orderResult = await connection.execute(
        `INSERT INTO orders (username, order_date, status, total_amount, shipping_address, phone)
         VALUES (?, NOW(), 'Pending', ?, ?, ?)`,
        [username, total_amount, `${shipping_address}, ${city}, ${zip_code}, ${province}`, phone]
      );

      const orderId = orderResult[0].insertId;

      for (const item of order_items) {
        await connection.execute(
          `INSERT INTO order_items (order_id, sku_id, quantity, unit_price, size, subtotal, image_url, product_name)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [orderId, item.sku_id, item.quantity, item.unit_price, item.size, item.unit_price * item.quantity, item.image_url, item.product_name]
        );
      }

      await connection.commit();
      await connection.end();

      res.status(201).json({ message: 'Order placed successfully', order_id: orderId });
    } catch (error) {
      console.error('Error placing order:', error);
      // Rollback the transaction in case of an error
      await connection.rollback();
      await connection.end();
      // res.status(500).json({ error: 'Error placing order' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
