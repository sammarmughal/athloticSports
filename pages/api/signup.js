import { createConnection } from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, username, password, age, gender } = req.body; // Extracting values from request body

    const connection = await createConnection({
      host: 'localhost',
      user: 'root',
      password: 'athloticsports',
      database: 'athlotic_sports',
    });

    try {
      // Check for duplicate email
      const [existingEmail] = await connection.execute(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );

      if (existingEmail.length > 0) {
        return res.status(409).json({ message: 'Email is already registered' });
      }

      // Check for duplicate username
      const [existingUsername] = await connection.execute(
        'SELECT * FROM users WHERE username = ?',
        [username]
      );

      if (existingUsername.length > 0) {
        return res.status(409).json({ message: 'Username is already taken' });
      }

      await connection.execute(
        'INSERT INTO users (name, email, username, password, age, gender) VALUES (?, ?, ?, ?, ?, ?)',
        [name, email, username, password, age, gender]
      );

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user' });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
