export function errorHandler(err, req, res, next) {
  console.error("ERROR:", err);

  // PostgreSQL duplicate key
  if (err.code === "23505") {
    return res.status(400).json({ error: "Duplicate value" });
  }

  res.status(500).json({ error: "Internal Server Error" });
}
