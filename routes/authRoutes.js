/*import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ statusCode: 400, statusMessage: "All fields are required" });
    }
    const [rows] = await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    res.status(201).json({ statusCode: 201, statusMessage: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ statusCode: 500, statusMessage: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]);
    if (rows.length > 0) {
      res.status(200).json({ statusCode: 200, statusMessage: "Login successful", user: rows[0] });
    } else {
      res.status(401).json({ statusCode: 401, statusMessage: "Login failed" });
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, statusMessage: err.message });
  }
});

export default router;*/
