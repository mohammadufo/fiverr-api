import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import messageRoute from "./routes/message.route.js";
import conversationRoute from "./routes/conversation.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";

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

app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/auth", authRoute);

app.listen(8080, () => {
  connect();
  console.log("Server is running!");
});
