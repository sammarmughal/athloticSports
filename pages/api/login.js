import { db } from '../../utils/db';

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
      return res.status(200).json({ role: 'user' });
    }

    // Check admin credentials
    const [admin] = await db.query('SELECT * FROM admin WHERE (email = ? OR username = ?) AND password = ?', [loginInput, loginInput, password]);

    if (admin.length > 0) {
      return res.status(200).json({ role: 'admin' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
