import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const url = process.env.MONGODB_URL;
  if (!url) throw new Error("MONGODB_URL is undefined");

  await mongoose.connect(url);
  isConnected = true;
  console.log("✅ MongoDB connected");
}