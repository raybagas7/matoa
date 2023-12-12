import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import ProductView from "./ProductView";
import { useViewPage } from "../../store/admin/viewPage/useViewPage";
import LoadingBar from "../../Components/Custom/LoadingBar";
import ProductDetailView from "./ProductDetailView";
function ProductViewPage() {
  const { id } = useParams();
  const resetState = useViewPage.use.resetState();
  const initialize = useViewPage.use.initialize();
  const getData = useViewPage.use.getDataProduct();
  useEffect(() => {
    resetState();
    getData(id as string);
  }, [id, getData, resetState]);

  if (initialize) {
    return (
      <div className="h-full w-full">
        <LoadingBar />
      </div>
    );
  }

  return (
    <>
      <div className="flex overflow-hidden bg-[#F7F6F4]">
        <SideBar />
        <div className="h-full w-[22vw]" />
        <div className="flex-1">
          <ProductView />
          <ProductDetailView />
        </div>
      </div>
    </>
  );
}

export default ProductViewPage;
