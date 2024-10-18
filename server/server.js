import express from "express";
import next from "next";
import dotenv from 'dotenv'
dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 5000; // Custom port here

app.prepare().then(() => {
  const server = express();

  // This will handle all requests
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server running on http://localhost:${port}`);
  });
});
