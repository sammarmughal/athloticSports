// /pages/api/user/updateAddress.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { username, shipping_address, city, province, zip_code,phone } = req.body;

    // Check for undefined values and set them to null
    const params = [
      shipping_address !== undefined ? shipping_address : null,
      city !== undefined ? city : null,
      province !== undefined ? province : null,
      zip_code !== undefined ? zip_code : null,
      phone !== undefined ? phone : null,
      username !== undefined ? username : null,
    ];

    try {
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
      });

      const [result] = await connection.execute(
        'UPDATE users SET shipping_address = ?, city = ?, province = ?, zip_code = ?, phone=? WHERE username = ?',
        params
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'Address updated successfully' });

      await connection.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update address' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
