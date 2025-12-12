import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

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

const register = async (req: any, res: any) => {
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

export { login, register };
