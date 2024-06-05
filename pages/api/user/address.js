import pool from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { username, address } = req.body;
    try {
      await pool.query('UPDATE users SET address = ? WHERE username = ?', [address, username]);
      res.status(200).json({ message: 'Address updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update address' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
