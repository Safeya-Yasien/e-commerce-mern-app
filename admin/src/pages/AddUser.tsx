import { PageTitle } from "@/components/common";
import AddUserForm from "@/forms/AddUserForm";
import { useParams } from "react-router";

const AddUserPage = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#252A30]">
      <PageTitle title={`${id ? "Update" : "Add"} User`} />

      <AddUserForm />
    </div>
  );
};

export default AddUserPage;
