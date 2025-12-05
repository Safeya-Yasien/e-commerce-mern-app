dotenv.config();
import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/lib/db";
import cors from "cors";
import userRouter from "./src/routes/users.route";
import productRouter from "./src/routes/products.route";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

const corsOptions = {
  origin: "http://localhost:5173",
  optionSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI;

connectDB(dbURI || "");

cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handleUpload = async (file) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "image",
  });
  return res;
};

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
