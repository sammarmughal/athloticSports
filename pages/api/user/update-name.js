import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { username, name } = req.body;
    const params = [
      name !== undefined ? name : null,
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
        'UPDATE users SET name = ? WHERE username = ?',
        params
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'Name updated successfully' });

      await connection.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update name' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
