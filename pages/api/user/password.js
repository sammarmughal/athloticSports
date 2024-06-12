import mysql from 'mysql2/promise';
import { verifyToken } from '../../../lib/auth'; 

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { oldPassword, newPassword, username } = req.body;
    if (!username) {
      return res.status(401).json({ message: 'Username not provided' });
    }

    try {
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
      });

      const [rows] = await connection.execute('SELECT password FROM users WHERE username = ?', [username]);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (rows[0].password !== oldPassword) {
        return res.status(400).json({ message: 'Old password is incorrect' });
      }
      await connection.execute('UPDATE users SET password = ? WHERE username = ?', [newPassword, username]);
      res.status(200).json({ message: 'Password changed successfully' });

      await connection.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to change password' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

