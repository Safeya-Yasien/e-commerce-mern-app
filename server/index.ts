import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/lib/db";
import userRouter from "./src/routes/users.route";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI;

connectDB(dbURI || "");

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
