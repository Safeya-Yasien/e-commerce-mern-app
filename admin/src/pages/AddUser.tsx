import AddUserForm from "@/forms/AddUserForm";

const AddUserPage = () => {
  return (
    <div className="bg-[#252A30]  p-8">
      <h2 className="text-white text-2xl font-semibold mb-6 text-left">
        Add User
      </h2>

      <AddUserForm />
    </div>
  );
};

export default AddUserPage;
