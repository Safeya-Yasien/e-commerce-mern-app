import express from "express";
const router = express.Router();
import {
  deleteAllUsers,
  getUsers,
  login,
  signup,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";

router.post("/signup", signup);
router.post("/login", login);
router.get("/", getUsers);
router.post("/add", addUser);
router.put("/update/:id", updateUser);
router.get("/:id", getUserById);
router.delete("/delete/:id", deleteUser);
router.delete("/", deleteAllUsers);

export default router;
