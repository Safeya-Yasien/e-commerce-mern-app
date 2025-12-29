import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email().nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .nonempty({ message: "Password is required" }),
});

export type TLoginForm = z.infer<typeof loginSchema>;
