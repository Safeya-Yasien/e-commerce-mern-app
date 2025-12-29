import z from "zod";

export const signupSchema = z
  .object({
    firstName: z.string().nonempty({ message: "First name is required" }),
    lastName: z.string().nonempty({ message: "Last name is required" }),
    email: z.string().email().nonempty({ message: "Email is required" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters" })
      .nonempty({ message: "Password is required" }),
    confirmPassword: z
      .string()
      .min(4, { message: "Password must be at least 4 characters" })
      .nonempty({ message: "Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TSignupFormData = z.infer<typeof signupSchema>;
