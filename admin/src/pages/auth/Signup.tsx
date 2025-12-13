import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AuthFormInput } from "@/components";
import { signupSchema, type TSignupFormData } from "@/schemas/signupSchema";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/auth`;

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const mutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: TSignupFormData) => {
      console.log("Signup data :", data);
      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create account");
      }

      console.log("Signup response :", res);

      return res.json();
    },
    onSuccess: () => {
      toast.success("Account created successfully", {
        onClose: () => navigate("/auth/login"),
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-2 text-center">
        Create account
      </h1>
      <p className="text-gray-400 text-sm mb-6 text-center">
        Start building your journey
      </p>

      <form
        onSubmit={handleSubmit((data) => mutation.mutate(data))}
        className="space-y-5"
      >
        {/* first + last name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AuthFormInput
            name="firstName"
            label="First name"
            placeholder="John"
            icon={User}
            register={register}
            error={errors.firstName}
          />
          <AuthFormInput
            name="lastName"
            label="Last name"
            placeholder="Doe"
            icon={User}
            register={register}
            error={errors.lastName}
          />
        </div>

        <AuthFormInput
          name="email"
          label="Email"
          placeholder="you@example.com"
          icon={Mail}
          register={register}
          error={errors.email}
        />

        <AuthFormInput
          name="password"
          label="Password"
          placeholder="••••••••"
          icon={Lock}
          type="password"
          register={register}
          error={errors.password}
        />

        <AuthFormInput
          name="confirmPassword"
          label="Confirm password"
          placeholder="••••••••"
          icon={Lock}
          type="password"
          register={register}
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`cursor-pointer w-full py-2.5 rounded-xl font-semibold text-white transition
            ${
              isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
        >
          {isSubmitting ? "Creating account..." : "Create account"}
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6 text-center">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-indigo-500 font-semibold hover:text-indigo-400"
        >
          Sign in
        </Link>
      </p>
    </>
  );
};

export default Signup;
