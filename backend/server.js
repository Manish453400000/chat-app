import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/api/v1/auth", authRoutes);

const startServer = (async () => {
  try {
    await connectDB(`${process.env.MONGO_URI}/${"chat-app"}`);
    app.listen(PORT, () => {
      console.log(`server listening on port: ${PORT}`);
    });
  } catch (err) {
    console.log("failed while starting server: ", err);
  }
})();
