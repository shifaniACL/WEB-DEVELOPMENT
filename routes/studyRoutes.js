/*import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM studies");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { studyId, name, description } = req.body;
  try {
    await db.query(
      "INSERT INTO studies (studyId, name, description) VALUES (?, ?, ?)",
      [studyId, name, description]
    );
    res.status(201).json({ message: "Study added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;*/
