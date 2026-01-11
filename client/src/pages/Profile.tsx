import { axiosInstance } from "@/api/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import z from "zod";

const EditProfileSchema = z.object({
  firstName: z.string().min(2, "Too short").nonempty("First name is required"),
  lastName: z.string().min(2, "Too short").nonempty("Last name is required"),
});

export type IEditProfileForm = z.infer<typeof EditProfileSchema>;

const Profile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axiosInstance("/users/profile");
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

  const mutation = useMutation({
    mutationFn: async (formData: IEditProfileForm) => {
      const res = await axiosInstance.put("/users/profile", formData);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      setOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit: SubmitHandler<IEditProfileForm> = (formData) => {
    mutation.mutate(formData);
  };

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
    queryClient.removeQueries({ queryKey: ["profile"] });
    queryClient.removeQueries({ queryKey: ["client"] });
    queryClient.removeQueries({ queryKey: ["cartCount"] });
    navigate("/");
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <div className="bg-base-light border border-gray-200 rounded-xl p-8 shadow-md">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={user.avatar || "https://i.pravatar.cc/150"}
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover border border-gray-300"
          />

          <div>
            <h1 className="text-2xl font-bold text-neutral-light capitalize">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-600">{user.email}</p>

            <span className="inline-block mt-2 px-3 py-1 text-sm rounded-md bg-primary-light/10 text-primary-light">
              {user.role}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500">Account type</span>
            <span className="font-medium text-neutral-light">{user.role}</span>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500">Joined</span>
            <span className="font-medium text-neutral-light">
              {new Date(user.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Modal */}
        {open && (
          <dialog className="modal modal-open">
            <div className="modal-box bg-base-light text-neutral-light">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg mb-4">Edit Profile</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    First Name
                  </label>
                  <input
                    className="w-full bg-base-light border border-gray-300 focus:border-primary-light focus:ring-primary-light rounded-md outline-0 p-2"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Last Name
                  </label>
                  <input
                    className="w-full bg-base-light border border-gray-300 focus:border-primary-light focus:ring-primary-light rounded-md outline-0 p-2"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div className="modal-action">
                  <button
                    type="button"
                    className="btn border-gray-300 hover:bg-gray-100 text-gray-600"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn bg-primary-light border-none text-base-light"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setOpen(false)} />
            </form>
          </dialog>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            className="btn border-primary-light text-primary-light bg-transparent hover:bg-primary-light hover:text-base-light rounded-md"
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </button>

          <button className="btn border-primary-light text-primary-light bg-transparent rounded-md">
            Change Password
          </button>

          <button
            className="btn bg-primary-light border-none text-base-light rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
