import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Optional: log when a connection is made
pool.on("connect", () => {
  console.log("PostgreSQL connected");
});
