import AddUserForm from "@/forms/AddUserForm";
import { useParams } from "react-router";

const AddUserPage = () => {
  const { id } = useParams();

  const isEditMode = Boolean(id);

  return (
    <div className="bg-[#252A30]  p-8">
      <h2 className="text-white text-2xl font-semibold mb-6 text-left">
        {isEditMode ? "Edit User" : "Add User"}
      </h2>

      <AddUserForm mode={isEditMode ? "edit" : "add"} userId={id} />
    </div>
  );
};

export default AddUserPage;
