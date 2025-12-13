import { AddInputFiled } from "@/components";
import { UserSchema, type IUserForm } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/users`;

const UserForm = () => {
  const { id } = useParams();

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
      const url = id ? `${BASE_URL}/update/${id}` : `${BASE_URL}/add`;
      const method = id ? "PUT" : "POST";
      return await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () => {
      toast.success(`User ${id ? "updated" : "added"} successfully`);
      reset();
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (data: IUserForm) => {
    mutation.mutate(data);
  };

  const { data: user } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      return data.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        country: user.country,
        phone: user.phone,
        gender: user.gender,
      });
    }
  }, [id, user, reset]);

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Left Column */}
      <div className="space-y-4">
        <AddInputFiled
          register={register}
          name="firstName"
          placeholder="Enter first name"
          label="First Name"
          error={errors.firstName}
        />

        <div>
          <label className="text-gray-300 mb-1 block">Gender</label>
          <select
            className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            {...register("gender", { required: true })}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <AddInputFiled
          register={register}
          name="email"
          placeholder="Enter your email"
          label="Email"
          type="email"
          error={errors.email}
        />

        <div>
          <label className="text-gray-300 mb-1 block">Role</label>
          <select
            className="w-full px-4 py-2 rounded-md bg-[#1C2024] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
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
        <AddInputFiled
          register={register}
          name="lastName"
          placeholder="Enter your last name"
          label="Last Name"
          error={errors.lastName}
        />

        <AddInputFiled
          register={register}
          name="country"
          placeholder="Enter your country"
          label="Country"
          error={errors.country}
        />

        <AddInputFiled
          register={register}
          name="phone"
          placeholder="Enter your phone number"
          label="Phone"
          error={errors.phone}
        />

        {/* Submit Button */}
        <div className="flex items-end mt-4 md:mt-11">
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md font-semibold transition"
          >
            {id ? "Update" : "Add"} User
          </button>
        </div>
      </div>
    </form>
  );
};
export default UserForm;
