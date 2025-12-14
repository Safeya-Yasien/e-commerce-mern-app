import jwt from "jsonwebtoken";
import User from "../models/user.model";

const authMiddleware = async (req: any, res: any, next: any) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ msg: "Access Denied. No token provided", success: false });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ msg: "No token provided" });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        msg: "User no longer exists, please login again",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Invalid token", success: false });
  }
};

export default authMiddleware;
