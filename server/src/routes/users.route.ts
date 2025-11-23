import express from "express";
const router = express.Router();
import {
  deleteAllUsers,
  getUsers,
  login,
  signup,
  getUserById,
} from "../controllers/users.controller";
// import roleMiddleware from "../middlewares/roleMiddleware";
// import authMiddleware from "../middlewares/authMiddleware";

router.post("/signup", signup);
router.post("/login", login);
// router.get("/", authMiddleware, roleMiddleware(["admin"]), getUsers);
router.get("/", getUsers);
router.get("/:id", getUserById);
// router.get("/:id", authMiddleware, roleMiddleware(["admin"]), getUserById);
router.delete("/", deleteAllUsers);
// router.delete("/", authMiddleware, roleMiddleware(["admin"]), deleteAllUsers);

export default router;
