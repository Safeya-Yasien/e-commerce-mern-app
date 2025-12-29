import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import dotenv from "dotenv";
dotenv.config();

const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ msg: "User not found", data: null, success: false });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res
        .status(401)
        .json({ msg: "Invalid Credentials", data: null, success: false });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET as string
    );

    res.status(200).json({
      msg: "User logged in successfully",
      data: { token },
      success: true,
    });
  } catch (err) {
    console.error("LOGIN ERROR =>", err);
    res.status(500).json({ msg: "Server error", error: err });
  }
};

const signup = async (req: any, res: any) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        msg: "Please provide all the required fields",
        data: null,
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        msg: "User already exists",
        data: null,
        success: false,
      });
    }

    const userCount = await User.countDocuments();
    let assignedRole: "admin" | "viewer";

    if (userCount === 0) assignedRole = "admin";
    else assignedRole = "viewer";

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: assignedRole,
    });
    await newUser.save();

    res.status(201).json({
      msg: "User registered successfully",
      data: newUser,
      success: true,
    });
  } catch (err) {
    console.error("REGISTER ERROR =>", err);
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

export { login, signup };
