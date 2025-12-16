import { SummaryCard } from "@/components";
import { PageTitle } from "@/components/common";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api`;

const Home = () => {
  const { data: usersData, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const res = await fetch(`${BASE_URL}/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        return json.data;
      } catch (err) {
        console.error("Fetch users failed:", err);
        throw err;
      }
    },
  });

  // products
  const { data: productsData, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const res = await fetch(`${BASE_URL}/products`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        return json.data;
      } catch (err) {
        console.error("Fetch products failed:", err);
        throw err;
      }
    },
  });

  if (usersLoading || productsLoading)
    return (
      <div className="text-center text-gray-400 mt-10">Loading summary...</div>
    );

  return (
    <div className="min-h-screen text-white">
      <PageTitle title="Dashboard Summary" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  p-8">
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
