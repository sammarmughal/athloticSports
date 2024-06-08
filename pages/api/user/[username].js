
import db from "../../../lib/db"; // Adjust the import based on your database setup

export default async function handler(req, res) {
  const { username } = req.query;

  if (req.method === "GET") {
    // Fetch user data (already implemented in your code)
    try {
      const user = await db.getUserByUsername(username); // Replace with your actual DB query
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ message: "Error fetching user data" });
    }
  } else if (req.method === "PUT") {
    // Update user data
    const { name, email } = req.body;

    try {
      // Replace with your actual DB update logic
      await db.updateUser(username, { name, email });
      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      console.error("Error updating user data:", error);
      res.status(500).json({ message: "Error updating user data" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
