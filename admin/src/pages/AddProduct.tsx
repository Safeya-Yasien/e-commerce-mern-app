import { PageTitle } from "@/components/common";
import { ProductForm } from "@/forms";
import { useParams } from "react-router";

const AddProductPage = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#252A30]">
      <PageTitle title={`${id ? "Update" : "Add"} Product`} />

      <ProductForm />
    </div>
  );
};
export default AddProductPage;
