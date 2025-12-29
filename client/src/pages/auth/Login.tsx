import { AuthInput } from "@/components";
import { loginSchema } from "@/schemas/auth/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/auth`;

export interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<ILoginForm> = (data: ILoginForm) => {
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: ILoginForm) => {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(response.statusText || "Failed to login");
      }

      const res = await response.json();
      return res.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      toast.success("Login successful");
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-neutral">Welcome back</h2>
        <p className="mt-1 text-sm text-neutral/70">
          Log in to continue learning
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="text-neutral/70">Remember me</span>
          </label>

          <a className="text-secondary hover:underline">Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-2">
          Log in
        </button>
      </form>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-neutral/70">
        Don’t have an account?{" "}
        <Link
          to={"/auth/signup"}
          className="text-secondary font-medium hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
