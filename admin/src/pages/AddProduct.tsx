import AddProductForm from "@/forms/AddProductForm";

const AddProductPage = () => {
  return (
    <div className="bg-[#252A30]  p-8">
      <h2 className="text-white text-2xl font-semibold mb-6 text-left">
        Add Product
      </h2>

      <AddProductForm />
    </div>
  );
};
export default AddProductPage;
