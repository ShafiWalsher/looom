import "dotenv/config";
import express from "express";
import { pool } from "./db.js";
import { initDatabase } from "./db/init.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

const PORT = process.env.PORT || 3000;

// STARTUP SEQUENCE
async function startServer() {
  try {
    await pool.query("SELECT 1");
    console.log("Database connection verified");

    await initDatabase();
    console.log("Database Initialized");

    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to database");
    console.error(err);
    process.exit(1); // Stop app if DB fails
  }
}

startServer();
