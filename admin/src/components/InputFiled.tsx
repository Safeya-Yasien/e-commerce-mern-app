import type { ICustomerForm } from "@/schemas/customerSchema";
import type { FieldError, UseFormRegister } from "react-hook-form";

interface IInputFiled {
  type?: string;
  name: keyof ICustomerForm;
  placeholder: string;
  label: string;
  register: UseFormRegister<ICustomerForm>;
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
  return (
    <div>
      <label className="text-gray-300 mb-1 block">{label}</label>
      <input
        type={type}
        className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500
          ${disabled ? "cursor-not-allowed bg-gray-700" : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, type === "number" ? { valueAsNumber: true } : {})}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};
export default InputFiled;
