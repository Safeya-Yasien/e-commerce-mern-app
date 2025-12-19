import { PageTitle } from "@/components/common";
import { ProductsList } from "@/components/products";

const ProductsPage = () => {
  return (
    <div className="">
      <PageTitle title="products" />

      <ProductsList />
    </div>
  );
};
export default ProductsPage;
