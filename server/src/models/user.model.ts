import mongoose, { Schema } from "mongoose";
import validator from "validator";

interface IUser {
  fullName: string;
  email: string;
  password: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  fullName: {
    type: String,
    required: [true, "Please enter a full name"],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 6,
  },
  role: { type: String, default: "admin" },
});

const User = mongoose.model("User", userSchema);

export default User;
