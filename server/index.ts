import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/lib/db";

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI;

connectDB(dbURI as string);

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
