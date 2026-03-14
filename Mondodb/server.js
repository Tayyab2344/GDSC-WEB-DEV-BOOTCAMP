import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/route.js";
dotenv.config();
const app = express();

app.use(express.json());
connectDB();
app.use("/api", router);
app.listen(process.env.PORT, () => {
  console.log("server is running on port 3000");
});
