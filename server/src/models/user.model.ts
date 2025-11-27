import mongoose, { Schema } from "mongoose";
import validator from "validator";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "admin" | "user";
  country?: string;
  phone: string;
  gender?: "Male" | "Female";
}

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
      lowercase: true,
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
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
    role: {
      type: String,
      default: "admin",
      required: [true, "Please select a role"],
    },
    country: { type: String },
    phone: { type: String },
    gender: { type: String, lowercase: true, enum: ["male", "female"] },
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete (ret as any).password;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
    },
  }
);

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

const User = mongoose.model("User", userSchema);

export default User;
