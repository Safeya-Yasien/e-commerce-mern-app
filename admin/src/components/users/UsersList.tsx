import { DeleteButton } from "@/components/actions";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const BASE_URL = `${import.meta.env.VITE_API_URI}/api/users`;

interface IUser {
  id: string;
  fullName: string;
  email: string;
  role: string;
}

const UsersList = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(`${BASE_URL}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      } catch (err) {
        console.error("Token retrieval error:", err);
        throw err;
      }
    },
  });

  const viewUser = (id: string) => {
    navigate(`/users/${id}`);
  };

  const editUser = (id: string) => {
    navigate("/users/update/" + id);
  };

  if (isLoading) return <p className="text-gray-400">Loading users...</p>;
  if (isError) return <p className="text-red-400">Error loading users</p>;

  const users = data?.data || [];

  return (
    <div className="bg-[#252A30] rounded-2xl p-6 overflow-auto h-full">
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
                key={user.id}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="p-3">{user.fullName}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 capitalize">{user.role}</td>
                <td className="p-3 flex space-x-2 justify-center">
                  <button
                    onClick={() => viewUser(user.id)}
                    className="cursor-pointer px-3 py-1 bg-green-600 rounded-md text-white text-sm hover:bg-green-500 flex items-center gap-1"
                  >
                    View
                  </button>

                  <button
                    onClick={() => editUser(user.id)}
                    className="cursor-pointer px-3 py-1 bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 flex items-center gap-1"
                  >
                    Edit
                  </button>

                  <DeleteButton
                    id={user.id}
                    baseUrl={BASE_URL}
                    label={"user"}
                    itemName={user.fullName}
                    queryKey={"users"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default UsersList;
