import * as z from "zod";

export const UserSchema = z.object({
  firstName: z.string().nonempty("First name is required").min(2, "Too Short"),
  lastName: z.string().nonempty("Last name is required").min(2, "Too Short"),
  gender: z.string().nonempty("Gender is required"),
  country: z.string(),
  phone: z.string().nonempty("Phone is required"),
  email: z.email().nonempty("Email is required"),
  role: z.string().nonempty("Role is required"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type IUserForm = z.infer<typeof UserSchema>;
