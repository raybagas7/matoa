import React from "react";
import { ProductDescription, ProductModel } from "../../Interfaces/Product";
import { useViewPage } from "../../store/admin/viewPage/useViewPage";
import { BiSolidDiscount } from "react-icons/bi";
import { formatID } from "../../utils/currencyFormat";

interface IProductViewDesc {
  currentModelData: ProductModel;
  changeMainImageModel: (url: string) => void;
}

function ProductViewDescription({
  currentModelData,
  changeMainImageModel,
}: IProductViewDesc) {
  const description: ProductDescription | undefined =
    useViewPage.use.productDesc();
  const models: ProductModel[] | undefined = useViewPage.use.productModel();
  const changeCurrentModel = useViewPage.use.changeCurrentModel();
  let valueAfterCut: number = 0;

  if (description) {
    if (description.discount > 0) {
      valueAfterCut =
        description.price - (description.discount / 100) * description.price;
      console.log(valueAfterCut);
    }
  }

  const onChangeModel = (index: number) => {
    changeMainImageModel(models![index].photos![0] as string);
    changeCurrentModel(index);
  };
  return (
    <div className="space-y-5 text-primary-text">
      <div>
        <h1 className="text-[3.75rem] leading-10">{description?.name}</h1>
        <p>{currentModelData.name}</p>
      </div>
      <div>
        <div className="flex items-center gap-1">
          {description?.discount !== 0 ? (
            <>
              <BiSolidDiscount className="h-6 w-6 text-primary" />
              <p className="text-[1.2rem] text-secondary-text">
                {description!.discount}%{" "}
                {
                  <span className="text-sm text-primary line-through">
                    {description!.discount > 0 &&
                      formatID.format(description!.price)}
                  </span>
                }
              </p>
            </>
          ) : null}
        </div>
        <p className="text-[1.5rem]">
          {description!.discount > 0
            ? formatID.format(valueAfterCut)
            : formatID.format(description!.price)}
        </p>
      </div>
      <div>
        <p>Model</p>
        <div className="flex flex-wrap gap-2">
          {models?.map((model, index) => (
            <div
              key={model.id}
              onClick={() => onChangeModel(index)}
              className={`flex h-10 cursor-pointer items-center gap-1 rounded-lg border-[1px] px-2 shadow-md transition hover:shadow hover:transition
              ${
                model.id === currentModelData.id
                  ? "border-primary bg-primary/20"
                  : "border-secondary"
              }
              `}
            >
              <img
                className="h-7 w-7 rounded-full object-contain shadow-md"
                src={model.picture as string}
                alt={model.id}
              />
              <div className="max-w-[6rem]">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
                  {model.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>
        Quantity: {currentModelData.qty}{" "}
        <span className="text-primary">pcs</span>
      </p>
    </div>
  );
}

export default ProductViewDescription;
