import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();

client.on("error", (error) => console.log(`Error on Client Redis ${error}`));

app.get("/", (req, res) => {
  res.send("Hello From Server!");
});

app.post("/send", async (req, res) => {
  const { problemId, userId, code, language } = req.body;
  try {
    await client.lPush(
      "problems",
      JSON.stringify({ problemId, userId, code, language })
    );

    res.status(200).send("Submission received and stored.");
  } catch (error) {
    console.log(`Redis Error ${error}`);
    res.status(500).send("Failed to store submission.");
  }
});

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
