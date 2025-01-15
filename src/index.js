import dotenv from "dotenv";
import express from "express"
import connectDB from "./db/db.js";

dotenv.config({
  path: "./env"
});

const app = express(); // Define the app instance

connectDB()

  .then(() => {
    app.listen(process.env.PORT || 8001, () => {
      console.log(`Server is Running on Port: ${process.env.PORT}`);
    })
  })
  .catch((error) => {
    console.log("MongoDB connetion is failed !", error)
  })