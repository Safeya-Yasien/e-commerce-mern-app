import { useQuery } from "@tanstack/react-query";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api`;

interface IUser {
  _id: string;
  fullName: string;
  email: string;
  role: string;
}

const Users = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(`${BASE_URL}/users`, {});

        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      } catch (err) {
        console.error("Token retrieval error:", err);
        throw err;
      }
    },
  });

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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
