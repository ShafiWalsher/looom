import fs from "fs";
import path from "path";
import { pool } from "../db.js";

export async function initDatabase() {
  try {
    const schemaPath = path.resolve("src/db/schema.sql");
    const sql = fs.readFileSync(schemaPath, "utf-8");

    await pool.query(sql);
    console.log("Database schema initialized");
  } catch (err) {
    console.error("Schema initialization failed");
    console.error(err);
    process.exit(1);
  }
}
