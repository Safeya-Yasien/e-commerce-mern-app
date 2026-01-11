import type {
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";

type AuthInputProps<T extends FieldValues> = {
  label: string;
  placeholder: string;
  name: Path<T>;
  type: string;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
};

const AuthInput = <T extends FieldValues>({
  label,
  placeholder,
  name,
  type,
  register,
  error,
}: AuthInputProps<T>) => {
  return (
    <div>
      <label className="label">
        <span className="label-text ">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="input border border-gray-300 w-full outline-none focus:border-primary-light rounded-md"
      />
      {error && <p className="label-text-alt text-error">{error.message}</p>}
    </div>
  );
};
export default AuthInput;
