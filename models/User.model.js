import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      require: true,
      type: String,
    },
    img: {
      require: false,
      type: String,
    },
    country: {
      require: false,
      type: String,
    },
    phoneNumber: {
      require: false,
      type: String,
    },
    desc: {
      require: false,
      type: String,
    },
    isSeller: {
      default: false,
      require: false,
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
