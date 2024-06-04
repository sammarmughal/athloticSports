import { db } from '../../utils/db';
import jwt from 'jsonwebtoken';

const JWT_SECRET = '91e15b5e976f86643e7860de6c1624c0bc45c8b92e1cfa4d241fa7353c92f9f45857104c5b1b44626f46c7a3d88e26c32f4ef760554c07d4ad6d48484217af52';

export default async (req, res) => {
  const { method } = req;
  const { loginInput, password } = req.body;

  if (method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  if (!loginInput || !password) {
    return res.status(400).json({ message: 'Email/Username and password are required' });
  }

  try {
    // Check user credentials
    const [user] = await db.query('SELECT * FROM users WHERE (email = ? OR username = ?) AND password = ?', [loginInput, loginInput, password]);

    if (user.length > 0) {
      const token = jwt.sign({ role: 'user', id: user[0].id }, JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ token, role: 'user', username: user[0].username });
    }

    // Check admin credentials
    const [admin] = await db.query('SELECT * FROM admin WHERE (email = ? OR username = ?) AND password = ?', [loginInput, loginInput, password]);

    if (admin.length > 0) {
      const token = jwt.sign({ role: 'admin', id: admin[0].id }, JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ token, role: 'admin', username: admin[0].username });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
