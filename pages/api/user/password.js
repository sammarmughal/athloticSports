import pool from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';  // Ensure you have a function to verify tokens

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { oldPassword, newPassword } = req.body;
    const token = req.headers.authorization.split(" ")[1]; // Get the token from the header

    try {
      const { username } = verifyToken(token); // Extract username from token

      const [rows] = await pool.query('SELECT password FROM users WHERE username = ?', [username]);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (rows[0].password !== oldPassword) {
        return res.status(400).json({ message: 'Old password is incorrect' });
      }
      await pool.query('UPDATE users SET password = ? WHERE username = ?', [newPassword, username]);
      res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to change password' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
