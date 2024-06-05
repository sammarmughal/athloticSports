import pool from '../../../lib/db';
import { verifyToken } from '../../../lib/auth';  // Ensure you have a function to verify tokens

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { oldSecurityAnswer, newSecurityAnswer } = req.body;
    const token = req.headers.authorization.split(" ")[1]; // Get the token from the header

    try {
      const { username } = verifyToken(token); // Extract username from token

      const [rows] = await pool.query('SELECT security_answer FROM users WHERE username = ?', [username]);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (rows[0].security_answer !== oldSecurityAnswer) {
        return res.status(400).json({ message: 'Old security answer is incorrect' });
      }
      await pool.query('UPDATE users SET security_answer = ? WHERE username = ?', [newSecurityAnswer, username]);
      res.status(200).json({ message: 'Security answer changed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to change security answer' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
