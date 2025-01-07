import express from "express";
import mysql from "mysql2/promise";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 9000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// MySQL Database Connection
let db;
(async () => {
  try {
    db = await mysql.createConnection({
      host: "localhost",
      user: "root", // Replace with your MySQL username
      password: "", // Replace with your MySQL password
      database: "users", // Replace with your database name
    });
    console.log("Connected to MySQL database");

    // Create the `graphs` table if it doesn't exist
    await db.query(`
      CREATE TABLE IF NOT EXISTS graphs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        graphName VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        graphType VARCHAR(255) NOT NULL,
        xAxis VARCHAR(255) NOT NULL,
        yAxis VARCHAR(255) NOT NULL,
        filters VARCHAR(255),
        source VARCHAR(255),
        xAxisUnit VARCHAR(255),
        yAxisUnit VARCHAR(255),
        description TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Table 'graphs' ready.");

    // Create the `datasets` table if it doesn't exist
    await db.query(`
      CREATE TABLE IF NOT EXISTS datasets (
        datasetId VARCHAR(255) PRIMARY KEY,
        datasetName VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        datasetType VARCHAR(255) NOT NULL
      )
    `);

    // Create the `studies` table if it doesn't exist
    await db.query(`
      CREATE TABLE IF NOT EXISTS studies (
        studyId VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT
      )
    `);
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
})();

// User Authentication Routes

// Register User
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ statusCode: 400, statusMessage: "All fields are required" });
    }
    const [rows] = await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    if (rows.affectedRows > 0) {
      res.status(201).json({ statusCode: 201, statusMessage: "User registered successfully", userId: email });
    } else {
      res.status(500).json({ statusCode: 500, statusMessage: "Failed to register user" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ statusCode: 500, statusMessage: `Server error: ${error.message}` });
  }
});

// Login User
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ statusCode: 400, statusMessage: "Email and password are required" });
    }
    const [rows] = await db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]);
    if (rows.length > 0) {
      const user = rows[0];
      res.status(200).json({
        statusCode: 200,
        statusMessage: "Login successful",
        user: { id: user.id, username: user.username, email: user.email },
      });
    } else {
      res.status(401).json({ statusCode: 401, statusMessage: "Login Failed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ statusCode: 500, statusMessage: `Server error: ${error.message}` });
  }
});

// Graph Routes

// Add a new graph
app.post("/api/auth/graphs", async (req, res) => {
  const {
    graphName,
    category,
    graphType,
    xAxis,
    yAxis,
    filters,
    source,
    xAxisUnit,
    yAxisUnit,
    description,
  } = req.body;
  try {
    const [result] = await db.query(
      `INSERT INTO graphs (
        graphName, category, graphType, xAxis, yAxis, filters, source, xAxisUnit, yAxisUnit, description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [graphName, category, graphType, xAxis, yAxis, filters, source, xAxisUnit, yAxisUnit, description]
    );
    res.status(201).json({ message: "Graph data saved successfully.", data: result });
  } catch (err) {
    console.error("Error inserting data:", err.message);
    res.status(500).json({ message: "Failed to save graph data." });
  }
});
app.get("/api/auth/graphs", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM graphs");
    res.status(200).json({ message: "Graphs retrieved successfully.", data: rows });
  } catch (err) {
    console.error("Error retrieving graphs:", err.message);
    res.status(500).json({ message: "Failed to retrieve graphs." });
  }
});
// Datasets Routes

// Get all datasets
app.get("/api/auth/datasets", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM datasets");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching datasets", err);
    res.status(500).send("Error fetching datasets");
  }
});

// Add a new dataset
app.post("/api/auth/datasets", async (req, res) => {
  const { datasetId, datasetName, description, datasetType } = req.body;
  try {
    if (!datasetId || !datasetName || !description || !datasetType) {
      return res.status(400).send("All fields are required");
    }
    const [result] = await db.query(
      "INSERT INTO datasets (datasetId, datasetName, description, datasetType) VALUES (?, ?, ?, ?)",
      [datasetId, datasetName, description, datasetType]
    );
    res.status(201).json({ id: result.insertId, datasetId, datasetName, description, datasetType });
  } catch (err) {
    console.error("Error creating dataset", err);
    res.status(500).send("Error creating dataset");
  }
});

// Studies Routes

// Get all studies
app.get("/api/auth/study", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM studies");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching studies", err);
    res.status(500).send("Error fetching studies");
  }
});

// Add a new study
app.post("/api/auth/study", async (req, res) => {
  const { studyId, name, description } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO studies (studyId, name, description) VALUES (?, ?, ?)",
      [studyId, name, description]
    );
    res.status(201).send("Study added successfully");
  } catch (err) {
    console.error("Error adding study", err);
    res.status(500).send("Error adding study");
  }
});

// Edit a study
app.put("/api/auth/study/:studyId", async (req, res) => {
  const { studyId } = req.params;
  const { name, description } = req.body;
  try {
    const [result] = await db.query(
      "UPDATE studies SET name = ?, description = ? WHERE studyId = ?",
      [name, description, studyId]
    );
    res.status(200).send("Study updated successfully");
  } catch (err) {
    console.error("Error editing study", err);
    res.status(500).send("Error editing study");
  }
});

// Delete a study
app.delete("/api/auth/study/:studyId", async (req, res) => {
  const { studyId } = req.params;
  try {
    const [result] = await db.query("DELETE FROM studies WHERE studyId = ?", [studyId]);
    res.status(200).send("Study deleted successfully");
  } catch (err) {
    console.error("Error deleting study", err);
    res.status(500).send("Error deleting study");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
