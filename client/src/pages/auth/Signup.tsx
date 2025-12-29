import { AuthInput } from "@/components";
import { signupSchema } from "@/schemas/auth/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/auth`;
interface ISignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupForm>({
    resolver: zodResolver(signupSchema),
  });
  const onSubmit = (data: ISignupForm) => {
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: ISignupForm) => {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();

      if (!response.ok) {
        throw new Error(res.msg || "Failed to signup");
      }

      return res;
    },
    onSuccess: () => {
      toast.success("Signup successful");
      navigate("/auth/login");
    },

    onError: (err) => {
      toast.error(err.message, {});
    },
  });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-neutral">
          Create your account
        </h2>
        <p className="mt-1 text-sm text-neutral/70">
          Start learning in less than a minute
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* full name */}
        <AuthInput
          label="firstName"
          placeholder="John"
          name="firstName"
          type="text"
          register={register}
          error={errors.firstName}
        />

        {/* lastName */}
        <AuthInput
          label="lastName"
          placeholder="Doe"
          name="lastName"
          type="text"
          register={register}
          error={errors.lastName}
        />

        {/* email */}
        <AuthInput
          label="Email"
          placeholder="you@example.com"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        {/* password */}
        <AuthInput
          label="Password"
          placeholder="••••••••"
          name="password"
          type="password"
          register={register}
          error={errors.password}
        />

        {/* confirm password */}
        <AuthInput
          label="Confirm Password"
          placeholder="••••••••"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword}
        />

        <button type="submit" className="btn btn-primary w-full mt-2">
          Create account
        </button>
      </form>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-neutral/70">
        Already have an account?{" "}
        <Link
          to={"/auth/login"}
          className="text-secondary font-medium hover:underline"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
