import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface IAddInputFiledProps<T extends FieldValues> {
  type?: string;
  name: Path<T>;
  placeholder: string;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldErrors<T>[Path<T>];
  disabled?: boolean;
}

const AddInputFiled = <T extends FieldValues>({
  type = "text",
  name,
  placeholder,
  label,
  register,
  error,
  disabled,
}: IAddInputFiledProps<T>) => {
  return (
    <div className="relative">
      <label className="text-gray-300 mb-1 block">{label}</label>
      <input
        type={type}
        className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500
          ${disabled ? "cursor-not-allowed bg-gray-700" : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, type === "number" ? { valueAsNumber: true } : {})}
      />

      {error && <p className="text-red-500">{error.message as string}</p>}
    </div>
  );
};
export default AddInputFiled;
