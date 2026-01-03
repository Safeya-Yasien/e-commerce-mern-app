import express from "express";
const router = express.Router();
import {
  deleteAllUsers,
  getUsers,
  getUsersCount,
  getCurrentUser,
  getProfile,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  editProfile,
} from "../controllers/users.controller";
import roleMiddleware from "../middlewares/roleMiddleware";
import authMiddleware from "../middlewares/authMiddleware";

router.get("/count", authMiddleware, getUsersCount);
router.get("/", authMiddleware, roleMiddleware(["admin"]), getUsers);
router.get("/me", authMiddleware, getCurrentUser);
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, editProfile);
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
