import { SummaryCard } from "@/components";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api`;

const Home = () => {
  const { data: usersData, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}/users`, {});

      const json = await res.json();
      return json.data;
    },
  });

  // products
  const { data: productsData, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const token = localStorage.getItem("JWT");
      const res = await fetch(`${BASE_URL}/products`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      return json.data;
    },
  });

  if (usersLoading)
    if (usersLoading || productsLoading)
      return (
        <div className="text-center text-gray-400 mt-10">
          Loading summary...
        </div>
      );

  return (
    <div className="min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard title={"Total Users"} length={usersData?.length || 0} />

        {/* products */}
        <SummaryCard
          title={"Total Products"}
          length={productsData?.length || 0}
        />
      </div>
    </div>
  );
};

export default Home;
