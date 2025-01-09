import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./env"
});

connectDB()

  .then(() => {
    app.listen(process.env.PORT || 8001, () => {
      console.log(`Server is Running on Port: ${process.env.PORT}`);
    })
  })
  .catch((error) => {
    console.log("MongoDB connetion is failed !", error)
  })