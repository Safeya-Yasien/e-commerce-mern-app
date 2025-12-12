import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/lib/db";
import cors from "cors";
import userRouter from "./src/routes/users.route";
import productRouter from "./src/routes/products.route";
import authRouter from "./src/routes/auth.route";

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

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
