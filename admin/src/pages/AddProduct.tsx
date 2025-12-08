import { ProductForm } from "@/forms";
import { useParams } from "react-router";

const AddProductPage = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#252A30]  p-8">
      <h2 className="text-white text-2xl font-semibold mb-6 text-left">
        {`${id ? "Update" : "Add"}`} Product
      </h2>

      <ProductForm />
    </div>
  );
};
export default AddProductPage;
