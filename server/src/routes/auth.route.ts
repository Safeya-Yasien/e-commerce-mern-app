import express from "express";
const router = express.Router();
import { register, login } from "../controllers/auth.controller";

router.get("/register", register);
router.post("/login", login);

export default router;
