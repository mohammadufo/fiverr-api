import mongoose from "mongoose";

const { Schema } = mongoose;

const gigSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    unique: true,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  shortTitle: {
    type: String,
    require: true,
  },
  shortDesc: {
    type: String,
    require: true,
  },
  deliveryTime: {
    type: Number,
    require: true,
  },
  revisionNumber: {
    type: Number,
    require: true,
  },
  features: {
    type: [String],
    require: false,
  },
  totalStars: {
    type: Number,
    default: 0,
    require: true,
  },
  starNumber: {
    type: String,
    default: 0,
    require: true,
  },
  cats: {
    type: String,
    require: true,
  },
  Price: {
    type: Number,
    require: true,
  },
  coverImg: {
    type: String,
    require: true,
  },
  images: {
    type: [String],
    require: true,
  },
  sales: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Gig", gigSchema);
