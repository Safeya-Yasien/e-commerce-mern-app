import { PageTitle } from "@/components/common";
import { UserForm } from "@/forms";
import { useParams } from "react-router";

const AddUserPage = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#252A30]">
      <PageTitle title={`${id ? "Update" : "Add"} User`} />

      <UserForm />
    </div>
  );
};

export default AddUserPage;
