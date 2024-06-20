const jwt = require("jsonwebtoken");
const pool = require("../config/database");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT username, password, role FROM users WHERE username = ?",
      [username]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { username: user.username, role: user.role },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({
      message: "Logged in successfully",
      username: user.username,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
