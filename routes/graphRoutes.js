/*import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Add a new graph
router.post("/", async (req, res) => {
  const { graphName, category, graphType, xAxis, yAxis, filters, source, xAxisUnit, yAxisUnit, description } = req.body;
  try {
    await db.query(
      "INSERT INTO graphs (graphName, category, graphType, xAxis, yAxis, filters, source, xAxisUnit, yAxisUnit, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [graphName, category, graphType, xAxis, yAxis, filters, source, xAxisUnit, yAxisUnit, description]
    );
    res.status(201).json({ message: "Graph added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all graphs
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM graphs");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;*/
