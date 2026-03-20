import "dotenv/config";
import pkg from "pg";
const { Pool } = pkg;

// Vercel requires SSL for production database connections
const isProduction = process.env.NODE_ENV === "production";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
  max: 1,
});
