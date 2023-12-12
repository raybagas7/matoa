import MonthlyCard from "../../Components/Custom/MonthlyCard/MonthlyCard";
import { useHomeProduct } from "../../store/homeProduct/useHomeProduct";
import { AllProductData } from "../../Interfaces/Product";
import FlyingImage from "../../Components/Custom/FlyingImage/FlyingImage";

function MonthDeals() {
  const topFourProducts: AllProductData[] | undefined =
    useHomeProduct.use.productTopFour();
  console.log(topFourProducts);

  return (
    <>
      <h2 className="mt-[10rem] px-[10vw] text-[2.25rem] font-[500]">
        Monthly Deals
      </h2>

      <div className="flex justify-center">
        <div className="mt-[5rem] flex h-[30rem] w-[80vw] justify-between">
          {topFourProducts?.map((product: AllProductData) => (
            <MonthlyCard shadow key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MonthDeals;
