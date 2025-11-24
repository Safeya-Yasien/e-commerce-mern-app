import InputFiled from "@/components/InputFiled";
import { UserSchema, type IUserForm } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

interface IUserFormProps {
  mode: "add" | "edit";
  userId?: string;
}

const AddUserForm = ({ mode, userId }: IUserFormProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserForm>({
    resolver: zodResolver(UserSchema),
  });

  const {
    isPending,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/users/${userId}`);
      const data = await response.json();
      return data;
    },
    enabled: mode === "edit",
  });

  useEffect(() => {
    if (mode === "edit" && user?.data) reset(user.data);
  }, [mode, user, reset]);

  const mutation = useMutation({
    mutationFn: async (formData: IUserForm) => {
      const method = mode === "edit" ? "PUT" : "POST";
      const url =
        mode === "edit" ? `${BASE_URL}/users/${userId}` : `${BASE_URL}/users`;
      return await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () => {
      toast.success(
        `${mode === "edit" ? "User updated " : "User added "} successfully!`
      );
      reset();

      if (mode === "edit") {
        setTimeout(() => {
          navigate(`/users/${userId}`);
        }, 2000);
      }
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (data: IUserForm) => {
    mutation.mutate(data);
  };

  if (mode === "edit" && isPending) {
    return <p className="text-gray-400">Loading user data...</p>;
  }

  if (mode === "edit" && error) {
    return (
      <p className="text-red-500">
        Failed to load user info: {(error as Error).message}
      </p>
    );
  }

  return (
    <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Left Column */}
      <div className="space-y-4">
        {/* First Name */}
        <InputFiled
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
            disabled={mode === "edit"}
            className={`w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500
              ${mode === "edit" ? "cursor-not-allowed bg-gray-700" : ""}`}
            {...register("gender", { required: true })}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Email */}
        <InputFiled
          register={register}
          name="email"
          placeholder="Enter your email"
          label="Email"
          type="email"
          error={errors.email}
          disabled={mode === "edit"}
        />
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {/* Last Name */}
        <InputFiled
          register={register}
          name="lastName"
          placeholder="Enter your last name"
          label="Last Name"
          error={errors.lastName}
        />

        {/* Country */}
        <InputFiled
          register={register}
          name="country"
          placeholder="Enter your country"
          label="Country"
          error={errors.country}
        />

        {/* Phone */}
        <InputFiled
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
            {mode === "edit" ? "Update Customer" : "Add Customer"}
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddUserForm;
