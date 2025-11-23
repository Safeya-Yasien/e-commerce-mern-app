import AddCustomerForm from "@/forms/AddCustomerForm";
import { useParams } from "react-router";

const AddCustomerPage = () => {
  const { id } = useParams();

  const isEditMode = Boolean(id);

  return (
    <div className="bg-[#252A30]  p-8">
      <h2 className="text-white text-2xl font-semibold mb-6 text-left">
        {isEditMode ? "Edit Customer" : "Add Customer"}
      </h2>

      <AddCustomerForm mode={isEditMode ? "edit" : "add"} customerId={id} />
    </div>
  );
};

export default AddCustomerPage;
