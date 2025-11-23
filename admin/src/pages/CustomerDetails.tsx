import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

const CustomerDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isPending,
    error,
    data: response,
  } = useQuery({
    queryKey: ["customer", id],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/customers/${id}`);
      return await res.json();
    },
  });

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen text-gray-300">
        Loading customer details...
      </div>
    );

  if (error || !response?.data)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error loading customer details.
      </div>
    );

  const customer = response.data;

  return (
    <div className="min-h-screen bg-[#1C1F24] text-white p-8">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Customer Card */}
      <div className="max-w-3xl mx-auto bg-[#252A30] rounded-2xl p-8 shadow-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">
          {customer.fullName}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#2F343B] p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-lg font-medium">{customer.email || "—"}</p>
          </div>

          <div className="bg-[#2F343B] p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="text-lg font-medium">{customer.phone || "—"}</p>
          </div>

          <div className="bg-[#2F343B] p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Country</p>
            <p className="text-lg font-medium">{customer.country || "—"}</p>
          </div>

          <div className="bg-[#2F343B] p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Gender</p>
            <p className="text-lg font-medium capitalize">
              {customer.gender || "—"}
            </p>
          </div>

          <div className="bg-[#2F343B] p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Age</p>
            <p className="text-lg font-medium">{customer.age || "—"}</p>
          </div>

          <div className="bg-[#2F343B] p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Joined At</p>
            <p className="text-lg font-medium">
              {new Date(customer.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate(`/customers/edit-customer/${customer.id}`)}
            className="cursor-pointer bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg text-white font-medium transition"
          >
            Edit Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
