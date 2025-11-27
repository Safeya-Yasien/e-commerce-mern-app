import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import crypto from "crypto";

const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
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
      { id: user._id, role: user.role },
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
  const { fullName, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    res.status(201).json({
      msg: "User registered successfully",
      data: newUser,
      success: true,
    });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const addUser = async (req: any, res: any) => {
  try {
    const tempPassword = "use_" + crypto.randomBytes(2).toString("hex");
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    const userData = req.body;

    const user = new User({
      ...userData,
      password: hashedPassword,
    });
    await user.save();

 
    res
      .status(201)
      .json({ msg: "user added successfully", data: user, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const updateUser = async (req: any, res: any) => {
  try {
    const allUsers = await User.find({}, { __v: 0 });
    res.status(200).json({ msg: "success", data: allUsers, success: true });
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteUser = async (req: any, res: any) => {
  try {
    const allUsers = await User.find({}, { __v: 0 });
    res.status(200).json({ msg: "success", data: allUsers, success: true });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getUsers = async (req: any, res: any) => {
  try {
    const allUsers = await User.find({}, { __v: 0 });
    res.status(200).json({ msg: "success", data: allUsers, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const getUserById = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id, { __v: 0 });
    if (!user) {
      res
        .status(404)
        .json({ msg: "User not found", data: null, success: false });
      return;
    }

    res.status(200).json({ msg: "success", data: user, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

const deleteAllUsers = async (req: any, res: any) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ msg: "success", data: null, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
  }
};

export {
  getUsers,
  deleteAllUsers,
  login,
  signup,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
