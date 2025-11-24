import express from "express";
const router = express.Router();
import {
  deleteAllUsers,
  getUsers,
  login,
  signup,
  getUserById,
} from "../controllers/users.controller";

router.post("/signup", signup);
router.post("/login", login);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.delete("/", deleteAllUsers);

export default router;
