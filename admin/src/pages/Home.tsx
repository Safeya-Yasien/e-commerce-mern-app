import { SummaryCard } from "@/components";
import { PageTitle } from "@/components/common";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api`;

const Home = () => {
  const {
    data: usersCount,
    isLoading: usersLoading,
    isError: IsUsersError,
    error: usersError,
  } = useQuery({
    queryKey: ["users-count"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(`${BASE_URL}/users/count`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      return json.data;
    },
  });

  if (IsUsersError) {
    const errorMessage = usersError?.message || "Failed to fetch users count.";
    throw new Error(errorMessage);
  }

  // products
  const {
    data: productsCount,
    isLoading: productsLoading,
    isError: IsProductsError,
    error: productsError,
  } = useQuery({
    queryKey: ["products-count"],
    queryFn: async () => {
      const token = localStorage.getItem("token") || "";
      const res = await fetch(`${BASE_URL}/products/count`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error(res.statusText);

      const json = await res.json();
      return json.data;
    },
  });

  if (IsProductsError) {
    const errorMessage =
      productsError?.message || "Failed to fetch products count.";
    throw new Error(errorMessage);
  }

  if (usersLoading || productsLoading)
    return (
      <div className="text-center text-gray-400 mt-10">Loading summary...</div>
    );

  return (
    <div className="min-h-screen text-white">
      <PageTitle title="Dashboard Summary" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  p-8">
        <SummaryCard title={"Total Users"} length={usersCount} />

        {/* products */}
        <SummaryCard title={"Total Products"} length={productsCount} />
      </div>
    </div>
  );
};

export default Home;
