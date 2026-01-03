import { axiosInstance } from "@/api/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import z from "zod";

const EditProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, "Too short")
    .nonempty({ message: "First name is required" }),
  lastName: z
    .string()
    .min(2, "Too short")
    .nonempty({ message: "Last name is required" }),
});

export type IEditProfileForm = z.infer<typeof EditProfileSchema>;

const Profile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axiosInstance("/users/profile", {});
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEditProfileForm>({
    resolver: zodResolver(EditProfileSchema),
  });

  const onSubmit: SubmitHandler<IEditProfileForm> = (formData) => {
    mutation.mutate(formData);
  };

  const mutation = useMutation({
    mutationKey: ["editProfile"],
    mutationFn: async (formData: IEditProfileForm) => {
      const res = await axiosInstance.put("/users/profile", formData);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Profile updated successfully");
      setOpen(false);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const user = data?.data;

  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  }, [user, reset]);

  if (isLoading) return <p className="text-center">Loading profile...</p>;
  if (error) return <p className="text-center">Failed to load profile</p>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <div className="bg-base-200 rounded-xl p-8 shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={user.avatar || "https://i.pravatar.cc/150"}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover border"
          />

          <div>
            <h1 className="text-2xl font-bold text-primary capitalize">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-500">{user.email}</p>
            <span className="text-sm badge badge-secondary mt-2">
              {user.role}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="grid gap-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Account type</span>
            <span className="font-medium">{user.role}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Joined</span>
            <span className="font-medium">
              {new Date(user.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>

        {open && (
          <dialog className="modal modal-open">
            <div className="modal-box relative">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg mb-4">Edit Profile</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="text-gray-500 mb-1 block">First Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full outline-0"
                    placeholder="First name"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-gray-500 mb-1 block">Last Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full outline-0"
                    placeholder="Last name"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName.message}</p>
                  )}
                </div>

                <div className="modal-action">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setOpen(false)}>close</button>
            </form>
          </dialog>
        )}

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <button className="btn btn-primary" onClick={() => setOpen(true)}>
            Edit Profile
          </button>
          <button className="btn btn-outline">Change Password</button>
          <button className="btn btn-error" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
