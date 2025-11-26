import type { FieldError, UseFormRegister } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import type { IUserForm } from "@/schemas/userSchema";
import { useState } from "react";

interface IInputFiled {
  type?: string;
  name: keyof IUserForm;
  placeholder: string;
  label: string;
  register: UseFormRegister<IUserForm>;
  error?: FieldError;
  disabled?: boolean;
}

const InputFiled = ({
  type = "text",
  name,
  placeholder,
  label,
  register,
  error,
  disabled,
}: IInputFiled) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="relative">
      {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div> */}

      <label className="text-gray-300 mb-1 block">{label}</label>
      <input
        type={isPassword && showPassword ? "text" : type}
        className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500
          ${disabled ? "cursor-not-allowed bg-gray-700" : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, type === "number" ? { valueAsNumber: true } : {})}
      />

      {isPassword && (
        <div
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400" />
          )}
        </div>
      )}

      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
export default InputFiled;
