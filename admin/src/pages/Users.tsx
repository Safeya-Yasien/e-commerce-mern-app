import { DeleteButton } from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/users`;

interface IUser {
  _id: string;
  fullName: string;
  email: string;
  role: string;
}

const Users = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(`${BASE_URL}`, {});

        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      } catch (err) {
        console.error("Token retrieval error:", err);
        throw err;
      }
    },
  });

  const viewUser = (_id: string) => {
    setTimeout(() => {
      navigate(`/users/${_id}`);
    }, 2000);
  };

  if (isLoading) return <p className="text-gray-400">Loading users...</p>;
  if (isError) return <p className="text-red-400">Error loading users</p>;

  const users = data?.data || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">All Users</h1>

      {users.length === 0 ? (
        <p className="text-gray-400">No users found</p>
      ) : (
        <table className="w-full border border-gray-700 text-white rounded-lg overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 text-left">Full Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser) => (
              <tr
                key={user._id}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="p-3">{user.fullName}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 capitalize">{user.role}</td>
                <td className="p-3 flex space-x-2 justify-center">
                  <button className="cursor-pointer px-3 py-1 bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 flex items-center gap-1">
                    Edit
                  </button>
                  <DeleteButton
                    id={user._id}
                    baseUrl={BASE_URL}
                    label={"user"}
                    itemName={user.fullName}
                    queryKey={"users"}
                  />
                  <button
                    onClick={() => viewUser(user._id)}
                    className="cursor-pointer px-3 py-1 bg-green-600 rounded-md text-white text-sm hover:bg-green-500 flex items-center gap-1"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
