import ProductList from "./ProductList";
import SideBar from "../../Components/SideBar";

function ProductListPage() {
  return (
    <div className="flex overflow-hidden">
      <SideBar />
      <ProductList />
    </div>
  );
}

export default ProductListPage;
