import express from "express";
const router = express.Router();
import {
  deleteAllUsers,
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";

router.get("/", getUsers);
router.post("/add", addUser);
router.put("/update/:id", updateUser);
router.get("/:id", getUserById);
router.delete("/delete/:id", deleteUser);
router.delete("/", deleteAllUsers);

export default router;
