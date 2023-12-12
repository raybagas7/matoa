import { IoReturnDownBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ProductImageView from "./ProductImageView";

function ProductView() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`relative flex h-[100vh] w-full items-center justify-center p-[50px]`}
      >
        <button
          onClick={() => navigate("/admin")}
          className="group/back fixed right-10 top-10 z-50 flex items-center gap-3 rounded-lg border-2 border-primary px-5 py-3 text-primary duration-500 hover:bg-primary hover:shadow-lg hover:transition-colors hover:duration-500"
        >
          <p className="text-xl transition-transform duration-500 group-hover/back:translate-x-full group-hover/back:text-white group-hover/back:transition group-hover/back:duration-500">
            Back
          </p>
          <IoReturnDownBackOutline className="h-8 w-8 transition-transform duration-500 group-hover/back:-translate-x-[180%] group-hover/back:text-white group-hover/back:transition group-hover/back:duration-500" />
        </button>
        <ProductImageView />
      </div>
    </>
  );
}

export default ProductView;
