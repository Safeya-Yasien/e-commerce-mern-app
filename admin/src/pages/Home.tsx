import { useQuery } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const token = localStorage.getItem("token");

  const { data: usersData, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    enabled: !!token,
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      return json.data;
    },
  });

  const { data: customersData, isLoading: customersLoading } = useQuery({
    queryKey: ["customers"],
    enabled: !!token,
    queryFn: async () => {
      const token = localStorage.getItem("JWT");
      const res = await fetch(`${BASE_URL}/customers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      return json.data;
    },
  });

  if (!token) {
    return null;
  }

  if (usersLoading || customersLoading)
    return (
      <div className="text-center text-gray-400 mt-10">Loading summary...</div>
    );

  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-lg font-medium text-gray-300 mb-2">
            Total Users
          </h2>
          <p className="text-4xl font-bold text-indigo-400">
            {usersData?.length || 0}
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-lg font-medium text-gray-300 mb-2">
            Total Customers
          </h2>
          <p className="text-4xl font-bold text-green-400">
            {customersData?.length || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
