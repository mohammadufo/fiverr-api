import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

const app = express();

mongoose.set("strictQuery", true);

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to database!");
  } catch (error) {
    console.log(error);
  }
};

app.listen(8000, () => {
  connect();
  console.log("Server is running!");
});
