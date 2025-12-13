import { AuthFormInput } from "@/components/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { loginSchema, type TLoginFormData } from "@/schemas/auth/loginSchema";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/auth`;

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: TLoginFormData) => {
    mutation.mutate(data);
  };

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: TLoginFormData) => {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (!response.ok) {
        throw new Error(res.msg || "Failed to login");
      }

      return res;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      toast.success("Logged in successfully!", {
        onClose: () => {
          navigate("/", { replace: true });
        },
      });
    },
    onError: (err) => {
      toast.error(err.message, {});
    },
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <AuthFormInput
        name="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        register={register}
        icon={Mail}
        error={errors.email}
      />
      <AuthFormInput
        name="password"
        label="Password"
        placeholder="••••••••"
        type="password"
        icon={Lock}
        register={register}
        error={errors.password}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`cursor-pointer w-full py-3 rounded-xl text-white font-semibold transition duration-200 ${
          isSubmitting
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-indigo-500 hover:bg-indigo-600"
        }`}
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
};
export default LoginForm;
