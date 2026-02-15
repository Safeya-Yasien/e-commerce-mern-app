import { axiosInstance } from "@/api/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Calendar,
  Edit3,
  Key,
  LogOut,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";
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

  if (isLoading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20 text-error font-bold">
        Failed to load profile
      </div>
    );

  const handleLogout = () => {
    localStorage.removeItem("token");
    // this is the true but i comment it only for now
    // queryClient.clear();

    // this is i need to remove it because clear is enough
    // queryClient.removeQueries({ queryKey: ["profile"] });
    // queryClient.removeQueries({ queryKey: ["client"] });
    // queryClient.removeQueries({ queryKey: ["cartCount"] });
    navigate("/");
    // toast.info("Logged out successfully");
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4 min-h-screen">
      <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
        {/* Profile Header Banner */}
        <div className="h-32 bg-linear-to-r from-primary to-secondary opacity-80" />

        <div className="px-8 pb-8">
          {/* Avatar and Main Info */}
          <div className="relative -mt-12 flex flex-col md:flex-row items-end gap-6 mb-10">
            <div className="avatar">
              <div className="w-32 h-32 rounded-2xl ring ring-base-100 ring-offset-base-100 shadow-2xl">
                <img
                  src={
                    user.avatar ||
                    `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=random`
                  }
                  alt="avatar"
                />
              </div>
            </div>
            <div className="pb-2 flex-1">
              <h1 className="text-3xl font-black text-base-content capitalize">
                {user.firstName} {user.lastName}
              </h1>
              <div className="flex items-center gap-2 text-base-content/60 mt-1">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
            </div>
            <div className="pb-2">
              <div className="badge badge-primary badge-lg font-bold gap-2 py-4 uppercase tracking-widest text-xs">
                <ShieldCheck className="w-4 h-4" />
                {user.role}
              </div>
            </div>
          </div>

          <div className="divider">Account Details</div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center p-4 bg-base-200 rounded-xl gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold opacity-50">
                  Full Name
                </p>
                <p className="font-semibold">
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-base-200 rounded-xl gap-4">
              <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase font-bold opacity-50">
                  Joined On
                </p>
                <p className="font-semibold">
                  {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="btn btn-outline btn-primary gap-2"
              onClick={() => setOpen(true)}
            >
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>

            <button className="btn btn-ghost hover:bg-base-300 gap-2">
              <Key className="w-4 h-4" />
              Change Password
            </button>

            <div className="flex-1 md:text-right">
              <button
                className="btn btn-error btn-outline gap-2"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {open && (
        <div className="modal modal-open">
          <div className="modal-box bg-base-100 border border-base-300 shadow-2xl">
            <h3 className="font-black text-xl mb-6">Update Your Info</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col gap-2 mb-4">
                <label className="label font-bold text-xs uppercase opacity-60 ml-1">
                  First Name
                </label>
                <input
                  className={`
                            input input-bordered bg-base-200 
                            transition-all duration-200
                            focus:outline-none focus:border-primary focus:ring-0
                            ${errors.firstName ? "border-error text-error" : "border-base-300"}
                          `}
                  placeholder="Enter your first name"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <span className="text-error text-[10px] font-bold uppercase mt-1 ml-1">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="label font-bold text-xs uppercase opacity-60 ml-1">
                  Last Name
                </label>
                <input
                  className={`
                            input input-bordered focus:input-primary bg-base-200 
                            transition-all duration-200
                            focus:outline-none focus:border-primary focus:ring-0
                            ${errors.lastName ? "border-error text-error" : "border-base-300"}
                          `}
                  placeholder="Enter your last name"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <span className="text-error text-[10px] font-bold uppercase mt-1 ml-1">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="btn btn-primary px-8"
                >
                  {mutation.isPending ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          </div>
          <div
            className="modal-backdrop bg-black/40"
            onClick={() => setOpen(false)}
          ></div>
        </div>
      )}
    </section>
  );
};

export default Profile;
