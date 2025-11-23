import InputFiled from "@/components/InputFiled";
import { CustomerSchema, type ICustomerForm } from "@/schemas/customerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

interface ICustomerFormProps {
  mode: "add" | "edit";
  customerId?: string;
}

const AddCustomerForm = ({ mode, customerId }: ICustomerFormProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICustomerForm>({
    resolver: zodResolver(CustomerSchema),
  });

  const {
    isPending,
    error,
    data: customer,
  } = useQuery({
    queryKey: ["customer", customerId],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/customers/${customerId}`);
      const data = await response.json();
      return data;
    },
    enabled: mode === "edit",
  });

  useEffect(() => {
    if (mode === "edit" && customer?.data) reset(customer.data);
  }, [mode, customer, reset]);

  const mutation = useMutation({
    mutationFn: async (formData: ICustomerForm) => {
      const method = mode === "edit" ? "PUT" : "POST";
      const url =
        mode === "edit"
          ? `${BASE_URL}/customers/${customerId}`
          : `${BASE_URL}/customers`;
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
        `${
          mode === "edit" ? "Customer updated " : "Customer added "
        } successfully!`
      );
      reset();

      if (mode === "edit") {
        setTimeout(() => {
          navigate(`/customers/${customerId}`);
        }, 2000);
      }
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = async (data: ICustomerForm) => {
    mutation.mutate(data);
  };

  if (mode === "edit" && isPending) {
    return <p className="text-gray-400">Loading customer data...</p>;
  }

  if (mode === "edit" && error) {
    return (
      <p className="text-red-500">
        Failed to load customer info: {(error as Error).message}
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

        {/* Age */}
        <InputFiled
          register={register}
          name="age"
          placeholder="Enter your age"
          label="Age"
          type="number"
          error={errors.age}
        />

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
export default AddCustomerForm;
