import HeaderFlag from "../../Components/Custom/HeaderFlag";
import ProductDetailDesc from "./ProductDetailDesc";
import { ProductDescription } from "../../Interfaces/Product";
import { useViewPage } from "../../store/admin/viewPage/useViewPage";

function ProductDetailView() {
  const description: ProductDescription | undefined =
    useViewPage.use.productDesc();
  return (
    <>
      <div className="mb-10 flex justify-center bg-primary p-3 shadow-md">
        <div className="rounded-full bg-white/50 px-5 py-2 shadow-md">
          <h2 className="text-xl text-white">Detail</h2>
        </div>
      </div>
      <div className="relative flex flex-col gap-8">
        <div className="space-y-3">
          <HeaderFlag title="Case" />
          <ProductDetailDesc description={description!.caseDetail} />
        </div>
        <div className="space-y-3">
          <HeaderFlag title="Movement" />
          <ProductDetailDesc description={description!.movement} />
        </div>
        <div className="space-y-3">
          <HeaderFlag title="Dial" />
          <ProductDetailDesc description={description!.dial} />
        </div>
        <div className="space-y-3">
          <HeaderFlag title="Hand" />
          <ProductDetailDesc description={description!.hand} />
        </div>
        <div className="space-y-3">
          <HeaderFlag title="Important to Note" />
          <ProductDetailDesc description={description!.importantNote} />
        </div>
      </div>
    </>
  );
}

export default ProductDetailView;
