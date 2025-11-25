import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/lib/db";
import cors from "cors";
import userRouter from "./src/routes/users.route";

dotenv.config();

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

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
