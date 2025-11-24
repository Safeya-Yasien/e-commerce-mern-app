import * as z from "zod";

export const UserSchema = z.object({
  firstName: z.string().nonempty("First name is required").min(2, "Too Short"),
  lastName: z.string().nonempty("Last name is required").min(2, "Too Short"),
  gender: z.string(),
  country: z.string(),
  phone: z.string().nonempty("Phone is required"),
  email: z.email().nonempty("Email is required"),

  // lastUpdate: z.string(),
});

export type IUserForm = z.infer<typeof UserSchema>;
