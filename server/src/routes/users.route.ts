import express from "express";
const router = express.Router();
import {
  deleteAllUsers,
  getUsers,
  getUsersCount,
  getCurrentUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";
import roleMiddleware from "../middlewares/roleMiddleware";
import authMiddleware from "../middlewares/authMiddleware";

router.get("/", authMiddleware, roleMiddleware(["admin"]), getUsers);
router.get("/count", authMiddleware, getUsersCount);
router.get("/me", authMiddleware, getCurrentUser);
router.post("/add", authMiddleware, roleMiddleware(["admin"]), addUser);
router.put(
  "/update/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  updateUser
);
router.get("/:id", authMiddleware, roleMiddleware(["admin"]), getUserById);
router.delete(
  "/delete/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  deleteUser
);
router.delete("/", authMiddleware, roleMiddleware(["admin"]), deleteAllUsers);

export default router;
