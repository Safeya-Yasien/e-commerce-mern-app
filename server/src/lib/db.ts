import mongoose from "mongoose";

const connectDB = async (dbURI: string) => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB connected successfully");
  } catch (err: any) {
    console.error("MongoDB connection error:", err.message || "");
    process.exit(1);
  }
};

export default connectDB;
