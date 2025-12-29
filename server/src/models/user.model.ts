import mongoose, { Schema } from "mongoose";
import validator from "validator";

type TUserRole = "admin" | "viewer";
type TGender = "male" | "female";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: TUserRole;
  country?: string;
  phone: string;
  gender?: TGender;
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
    gender: {
      type: String,
      lowercase: true,
    },
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete (ret as any).password;
        delete (ret as any)._id;
        delete (ret as any)._v;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
    },
  }
);

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

const User = mongoose.model("User", userSchema);

export default User;
