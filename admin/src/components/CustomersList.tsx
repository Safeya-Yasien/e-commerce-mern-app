import { Eye } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ICustomer } from "@/types/customer.types";
import { useNavigate } from "react-router";
import useSearchQuery from "@/hooks/useSearchQuery";

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

const CustomersList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: filteredCustomers, isFetching: isSearching } = useSearchQuery();

  const {
    isPending,
    error,
    data: customers,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      try {
        const response = await fetch(`${BASE_URL}/customers`);

        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        return await response.json();
      } catch (err) {
        console.error("Fetch customers failed:", err);
        throw err;
      }
    },
  });

  const deleteCustomer = useMutation({
    mutationFn: async (id: string) => {
      return await fetch(`${BASE_URL}/customers/${id}`, { method: "DELETE" });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });

  const viewCustomer = (id: string) => {
    navigate(`/customers/${id}`);
  };

  const editCustomer = (id: string) => {
    navigate(`/customers/edit-customer/${id}`);
  };

  if (isPending || isSearching)
    return <p className="text-white text-2xl">Loading...</p>;
  if (error)
    return <p className="text-white text-2xl">Error: {error.message}</p>;

  if (!customers?.data)
    return <p className="text-white text-2xl">No customers found</p>;

  const customersList =
    filteredCustomers?.data && filteredCustomers.data.length > 0
      ? filteredCustomers.data
      : customers?.data || [];

  return (
    <div className="bg-[#252A30] rounded-2xl p-6 overflow-auto h-full">
      <h2 className="text-white text-xl font-semibold mb-4">Customers</h2>

      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-gray-300 text-left border-b border-gray-700">
            <th className="p-3">#</th>
            <th className="p-3">Full Name</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Country</th>
            <th className="p-3">Age</th>
            <th className="p-3">Last Updated</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customersList.map((customer: ICustomer, index: number) => (
            <tr
              key={customer.id}
              className="text-gray-200 border-b border-gray-700 hover:bg-[#2F343B] transition"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{customer.fullName}</td>
              <td className="p-3">{customer.gender}</td>
              <td className="p-3">{customer.country}</td>
              <td className="p-3">{customer.age}</td>
              <td className="p-3">{customer.createdAt}</td>
              <td className="p-3 flex space-x-2">
                <button
                  onClick={() => editCustomer(customer.id)}
                  className="cursor-pointer px-3 py-1 bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 flex items-center gap-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCustomer.mutate(customer.id)}
                  className="cursor-pointer px-3 py-1 bg-red-600 rounded-md text-white text-sm hover:bg-red-500 flex items-center gap-1"
                >
                  Delete
                </button>
                <button
                  onClick={() => viewCustomer(customer.id)}
                  className="cursor-pointer px-3 py-1 bg-green-600 rounded-md text-white text-sm hover:bg-green-500 flex items-center gap-1"
                >
                  <Eye className="w-4 h-4" /> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;
