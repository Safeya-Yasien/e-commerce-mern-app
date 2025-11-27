import { InputField } from "@/components";
import { UserSchema, type IUserForm } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/users`;

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserForm>({
    resolver: zodResolver(UserSchema),
  });

  const mutation = useMutation({
    mutationFn: async (formData: IUserForm) => {
      return await fetch(`${BASE_URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () => {
      toast.success(`User added  successfully!`);
      reset();
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (data: IUserForm) => {
    mutation.mutate(data);
  };

  return (
    <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Left Column */}
      <div className="space-y-4">
        {/* First Name */}
        <InputField
          register={register}
          name="firstName"
          placeholder="Enter first name"
          label="First Name"
          error={errors.firstName}
        />

        {/* Gender */}
        <div>
          <label className="text-gray-300 mb-1 block">Gender</label>
          <select
            className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500`}
            {...register("gender", { required: true })}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Email */}
        <InputField
          register={register}
          name="email"
          placeholder="Enter your email"
          label="Email"
          type="email"
          error={errors.email}
        />

        {/* role */}
        <div>
          <label className="text-gray-300 mb-1 block">Role</label>
          <select
            className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500`}
            {...register("role", { required: true })}
          >
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors && <p className="text-red-500">{errors.role?.message}</p>}
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {/* Last Name */}
        <InputField
          register={register}
          name="lastName"
          placeholder="Enter your last name"
          label="Last Name"
          error={errors.lastName}
        />

        {/* Country */}
        <InputField
          register={register}
          name="country"
          placeholder="Enter your country"
          label="Country"
          error={errors.country}
        />

        {/* Phone */}
        <InputField
          register={register}
          name="phone"
          placeholder="Enter your phone number"
          label="Phone"
          error={errors.phone}
        />

        {/* Submit Button */}
        <div className="flex items-end mt-11">
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md font-semibold transition"
          >
            Add User
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddUserForm;
