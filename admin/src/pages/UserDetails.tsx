import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/users`;

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: response,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return await res.json();
    },
  });

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen text-gray-300">
        Loading user details...
      </div>
    );

  if (error || !response?.data)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error loading user details.
      </div>
    );

  const user = response.data;

  return (
    <div className="min-h-screen bg-[#1C1F24] text-white p-4 sm:p-8">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer flex items-center gap-2 text-gray-300 hover:text-white mb-4 sm:mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Customer Card */}
      <div className="max-w-3xl mx-auto bg-[#252A30] rounded-2xl p-4 sm:p-8 shadow-xl border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-white">
          {user.fullName}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            { label: "Email", value: user.email },
            { label: "Phone", value: user.phone },
            { label: "Country", value: user.country },
            { label: "Gender", value: user.gender },
            { label: "Role", value: user.role },
            {
              label: "Joined At",
              value: new Date(user.created_at).toLocaleDateString(),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2F343B] p-4 rounded-xl wrap-break-word"
            >
              <p className="text-gray-400 text-sm">{item.label}</p>
              <p className="text-lg font-medium">{item.value || "—"}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            onClick={() => navigate(`/users/update/${user.id}`)}
            className="cursor-pointer bg-blue-600 hover:bg-blue-500 px-4 sm:px-6 py-2 rounded-lg text-white font-medium transition text-sm sm:text-base"
          >
            Edit User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
