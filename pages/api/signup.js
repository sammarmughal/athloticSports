import { createConnection } from 'mysql2';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, username, password, age, gender } = req.body; // Extracting values from request body

    const connection = createConnection({
      host: 'localhost',
      user: 'root',
      password: 'athloticsports',
      database: 'athlotic_sports',
    });

    try {
      await connection.execute(
        'INSERT INTO users (name, email, username, password, age, gender) VALUES (?, ?, ?, ?, ?, ?)',
        [name, email, username, password, age, gender]
      );

      res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      if (error && error.code === 'ER_DUP_ENTRY') {
        res.status(400).json({ message: 'Username is already taken' });
      } else {
        res.status(500).json({ message: 'Error registering user' });
      }
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
