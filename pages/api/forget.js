import { query } from "../../lib/db";

export default async function handler(req, res) {
  const { username, security_answer, new_password } = req.body;

  if (!username || !security_answer) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {

    const result = await query("SELECT * FROM users WHERE username = ? AND security_answer = ?", [username, security_answer]);

    if (result.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid username or security answer" });
    }
    
    if (new_password) {
      await query("UPDATE users SET password = ? WHERE username = ?", [new_password, username]);
      return res.status(200).json({ success: true, message: "Password updated successfully" });
    }

    return res.status(200).json({ success: true, message: "Verification successful, please enter new password" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: "An error occurred while processing your request" });
  }
}
