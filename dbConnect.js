import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

export default async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.error("Couldn't connect to MongoDB", error.message);
  }
}
