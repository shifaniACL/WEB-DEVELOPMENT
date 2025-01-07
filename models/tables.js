/*import db from "../config/db.js";

await db.query(`CREATE TABLE IF NOT EXISTS graphs (
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
)`);

await db.query(`CREATE TABLE IF NOT EXISTS datasets (
  datasetId VARCHAR(255) PRIMARY KEY,
  datasetName VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  datasetType VARCHAR(255) NOT NULL
)`);

await db.query(`CREATE TABLE IF NOT EXISTS studies (
  studyId VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
)`);

export default db;*/