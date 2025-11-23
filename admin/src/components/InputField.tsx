import React, { useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface InputFieldProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  placeholder: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  icon: Icon,
  placeholder,
  type = "text",
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>

      <input
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        {...register}
        className={`block w-full pl-10 pr-10 py-3 bg-white/10 text-white placeholder-gray-400 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 transition duration-150 ${
          error ? "border-red-500" : "border-white/20"
        }`}
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

      {error && (
        <span className="absolute left-0 -bottom-5 text-red-400 text-sm">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
