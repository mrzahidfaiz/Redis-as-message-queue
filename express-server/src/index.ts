import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();

async function startServer() {
  try {
    await client.connect();
    console.log("redis server started");

    app.listen(8080, () => {
      console.log("Server running on port 8080");
    });
  } catch (error) {
    console.log("Failed during start redis server " + error);
  }
}

startServer();
