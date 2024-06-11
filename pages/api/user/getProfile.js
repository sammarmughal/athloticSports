import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  if (req.method === "GET") {
    try {
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
      });

      const [rows] = await connection.execute(
        'SELECT name, email, shipping_address, city, province, zip_code, phone FROM users WHERE username = ?',
        [username]
      );

      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      const user = rows[0];
      res.status(200).json(user);

      await connection.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch user profile' });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
