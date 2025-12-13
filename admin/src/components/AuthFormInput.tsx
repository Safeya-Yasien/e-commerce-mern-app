import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface IAuthFormInputProps<T extends FieldValues> {
  type?: string;
  name: Path<T>;
  placeholder: string;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  disabled?: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const AuthFormInput = <T extends FieldValues>({
  type = "text",
  name,
  placeholder,
  label,
  register,
  error,
  disabled,
  icon: Icon,
}: IAuthFormInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="space-y-1">
      <label className="text-gray-400 text-sm block">{label}</label>

      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <Icon className="h-4.5 w-4.5" />
        </div>

        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full py-1.5 pl-10 pr-10 rounded-md bg-[#1C2024] text-white
            border border-gray-600 focus:outline-none focus:border-indigo-500
            ${disabled ? "cursor-not-allowed bg-gray-700" : ""}`}
          {...register(name)}
        />

        {isPassword && (
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4.5 w-4.5" />
            ) : (
              <Eye className="h-4.5 w-4.5" />
            )}
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );
};

export default AuthFormInput;
