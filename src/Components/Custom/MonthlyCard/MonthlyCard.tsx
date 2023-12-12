import { useEffect, useRef, useState } from "react";
import { AllProductData } from "../../../Interfaces/Product";
import { formatID } from "../../../utils/currencyFormat";
import MatoaButton from "../MatoaButton/MatoaButton";
import "./monthlyCard.css";
import { BiSolidDiscount } from "react-icons/bi";
import FlyingImage from "../FlyingImage/FlyingImage";

interface IMonthlyCard {
  product: AllProductData;
  shadow?: boolean;
}

function MonthlyCard({ product, shadow }: IMonthlyCard) {
  const imageRef = useRef<any>();
  const [xItem, setXItem] = useState();
  const [yItem, setYItem] = useState();
  const [isMove, setIsMove] = useState<boolean>(false);

  console.log(xItem);
  console.log(yItem);

  const handler = async () => {
    setIsMove(true);
    setTimeout(() => {
      setIsMove(false);
    }, 500);
  };

  useEffect(() => {
    let position = imageRef.current.getBoundingClientRect();
    setXItem(position.x);
    setYItem(position.y);
  }, []);

  let valueAfterCut: number = 0;
  if (product) {
    if (product.discount > 0) {
      valueAfterCut = product.price - (product.discount / 100) * product.price;
    }
  }

  return (
    <>
      {isMove && (
        <FlyingImage
          component={
            <img
              alt="productImage"
              className="h-[14rem] w-[14rem] object-cover"
              src={product.model[0].photos![0] as string}
            />
          }
          xItem={xItem}
          yItem={yItem}
        />
      )}
      <div
        className={`${
          shadow && "shadow"
        } month-card group relative flex h-[24rem] animate-default_monthlycard items-end  bg-white transition hover:animate-expand_monthlycard hover:shadow-md hover:transition`}
      >
        {/*overflow-hidden*/}
        <div className="h-full w-full overflow-hidden bg-white">
          <div className="mt-[15rem] px-[1.5rem]">
            <p className="text-[1.5rem] font-[500]">{product.name}</p>
            <div className="flex items-center gap-1">
              <p className="text-thin-text">{product.discount}%</p>
              <BiSolidDiscount className="h-5 w-5 text-primary" />
            </div>
            <p className="text-xs text-thin-text line-through decoration-primary">
              {formatID.format(product.price)}
            </p>
            <p>{formatID.format(valueAfterCut)}</p>
          </div>
          <div className="z-50 flex translate-y-[110%] justify-center px-[1.5rem] transition hover:transition group-hover:translate-y-5">
            <MatoaButton
              onClick={handler}
              primary
              name="addcart-disc"
              children="Add to cart"
            />
          </div>
        </div>

        <img
          alt="product-model"
          ref={imageRef}
          className="absolute -top-[2rem] left-0 right-0 m-auto h-[14rem] w-[14rem] object-cover"
          src={product.model[0].photos![0] as string}
        />
      </div>
    </>
  );
}

export default MonthlyCard;
