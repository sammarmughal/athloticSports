// /pages/api/user/updateEmail.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { username, email } = req.body;

    // Check for undefined values and set them to null
    const params = [
      email !== undefined ? email : null,
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
        'UPDATE users SET email = ? WHERE username = ?',
        params
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'Email updated successfully' });

      await connection.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update email' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
