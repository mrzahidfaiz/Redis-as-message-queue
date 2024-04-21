import { createClient } from "redis";

const client = createClient();

async function startWorker() {
  try {
    await client.connect();
    console.log("worker is connected!");
    while (true) {
      const response = await client.brPop("problems", 0);

      console.log(response);
    }
  } catch (error) {
    console.log('Failed to connect with redis ' + error)
  }
}

startWorker();
