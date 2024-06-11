import pool from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { username, email } = req.body;

    if (!username) {
      return res.status(401).json({ message: 'Username not provided' });
    }

    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      await connection.execute('UPDATE users SET email = ? WHERE username = ?', [email, username]);
      
      connection.release();

      res.status(200).json({ message: 'Email updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update email' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
