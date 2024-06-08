import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { oldSecurityAnswer, newSecurityAnswer, username } = req.body;

    if (!username) {
      return res.status(401).json({ message: 'Username not provided' });
    }

    try {
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
      });

      const [rows] = await connection.execute('SELECT security_answer FROM users WHERE username = ?', [username]);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (rows[0].security_answer !== oldSecurityAnswer) {
        return res.status(400).json({ message: 'Old security answer is incorrect' });
      }
      await connection.execute('UPDATE users SET security_answer = ? WHERE username = ?', [newSecurityAnswer, username]);
      res.status(200).json({ message: 'Security answer changed successfully' });

      // Close the connection
      await connection.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to change security answer' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
