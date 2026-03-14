import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONDODB_URI);
    console.log("db is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
