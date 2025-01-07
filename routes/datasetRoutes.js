/*import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM datasets");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { datasetId, datasetName, description, datasetType } = req.body;
  try {
    await db.query(
      "INSERT INTO datasets (datasetId, datasetName, description, datasetType) VALUES (?, ?, ?, ?)",
      [datasetId, datasetName, description, datasetType]
    );
    res.status(201).json({ message: "Dataset added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;*/
