export default async (req, res) => {
    const { method } = req;
  
    if (method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    }
  
    try {
      // Clear the session or authentication token
      res.setHeader('Set-Cookie', 'token=; Max-Age=0; Path=/login; HttpOnly');
      return res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  