import bcrypt from "bcrypt";
import User from "../models/user.model";
import crypto from "crypto";

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
  const { id } = req.params;

  try {
    if (!id) {
      res
        .status(400)
        .json({ msg: "Please provide a valid id", data: null, success: false });
      return;
    }

    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      res
        .status(404)
        .json({ msg: "User not found", data: null, success: false });
      return;
    }

    res.status(200).json({ msg: "success", data: user, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: null, success: false });
  }
};

const deleteUser = async (req: any, res: any) => {
  const { id } = req.params;
  try {
    if (!id) {
      res
        .status(400)
        .json({ msg: "Please provide a valid id", data: null, success: false });
      return;
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      res
        .status(404)
        .json({ msg: "User not found", data: null, success: false });
      return;
    }

    res.status(200).json({ msg: "success", data: null, success: true });
  } catch (err) {
    res.status(500).json({ msg: "error", data: err, success: false });
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

const getUsersCount = async (req: any, res: any) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ msg: "success", data: count, success: true });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error getting users count", data: err, success: false });
  }
};

const getCurrentUser = async (req: any, res: any) => {
  try {
    const user = await User.findById(req.user.id).select(
      "firstName email role"
    );


    if (!user) {
      res
        .status(404)
        .json({ msg: "User not found", data: null, success: false });
      return;
    }

    res.status(200).json({ msg: "success", data: user, success: true });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error getting current user", data: err, success: false });
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
  getUsersCount,
  getUserById,
  getCurrentUser,
  addUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
};
