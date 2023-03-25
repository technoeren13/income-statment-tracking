import { config } from "dotenv";
config({});

import express from "express";
import { connectMongo } from "./lib/connectDb";

const app = express();

const PORT = parseInt(process.env.PORT || "3000");

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} Port`);

  // CONNECT TO MONGODB
  connectMongo();
});
