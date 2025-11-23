import jwt from "jsonwebtoken";

const authMiddleware = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ msg: "Access Denied. No token provided", success: false });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Invalid token", success: false });
  }
};

export default authMiddleware;
