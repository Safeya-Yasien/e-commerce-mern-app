import { axiosInstance } from "@/api/axios";
import { AuthInput } from "@/components";
import { signupSchema } from "@/schemas/auth/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

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

  const mutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: ISignupForm) => {
      const response = await axiosInstance.post("/auth/signup", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Signup successful");
      navigate("/auth/login");
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = (data: ISignupForm) => mutation.mutate(data);

  return (
    <div className="w-full bg-base-light dark:bg-color-base-dark px-6 py-8 rounded-lg shadow-md">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-neutral-light dark:text-neutral-dark">
          Create your account
        </h2>
        <p className="mt-1 text-sm text-[var(--color-neutral-light)/70] dark:text-[var(--color-neutral-dark)/70]">
          Start learning in less than a minute
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          label="First Name"
          placeholder="John"
          name="firstName"
          type="text"
          register={register}
          error={errors.firstName}
        />
        <AuthInput
          label="Last Name"
          placeholder="Doe"
          name="lastName"
          type="text"
          register={register}
          error={errors.lastName}
        />
        <AuthInput
          label="Email"
          placeholder="you@example.com"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />
        <AuthInput
          label="Password"
          placeholder="••••••••"
          name="password"
          type="password"
          register={register}
          error={errors.password}
        />
        <AuthInput
          label="Confirm Password"
          placeholder="••••••••"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          className="w-full py-2 mt-2 bg-primary-light dark:bg-primary-dark text-base-light rounded-lg cursor-pointer transition"
        >
          Create account
        </button>
      </form>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-[var(--color-neutral-light)/70] dark:text-[var(--color-neutral-dark)/70]">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-primary-light dark:text-primary-dark font-medium hover:underline"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
