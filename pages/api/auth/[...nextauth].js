import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import mysql from 'mysql2/promise';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Connect to MySQL database
        const connection = await mysql.createConnection({
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
        });

        // Query the user by username
        const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [credentials.username]);
        
        // Close the connection
        await connection.end();

        const user = rows[0];

        if (user && user.password === credentials.password) {
          // Password match
          return { id: user.id, name: user.name, email: user.email };
        } else {
          // Invalid credentials
          return null;
        }
      }
    })
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    }
  }
});
