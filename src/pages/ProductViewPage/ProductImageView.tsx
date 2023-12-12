import { ProductModel } from "../../Interfaces/Product";
import ProductModelImage from "./ProductModelImage";
import { useViewPage } from "../../store/admin/viewPage/useViewPage";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import ProductViewDescription from "./ProductViewDescription";

function ProductImageView() {
  const currentModel: ProductModel | undefined = useViewPage.use.currentModel();
  const [mainImage, setMainImage] = useState(
    currentModel?.photos && currentModel.photos[0],
  );
  const changeMainImage = (newPosition: number) => {
    if (currentModel?.photos) {
      setMainImage(currentModel.photos[newPosition]);
    }
  };

  const changeMainImageModel = (url: string) => {
    setMainImage(url);
  };
  const debouncUrl = useDebounce(mainImage, 300);
  if (!currentModel || !currentModel.photos) {
    return null;
  }

  return (
    <div className="mt-5 flex gap-3">
      <ProductModelImage
        imgVariant={currentModel.photos as string[]}
        changeMainImage={changeMainImage}
      />
      <img
        key={debouncUrl as string}
        src={debouncUrl as string}
        alt={`${currentModel.name}`}
        className="h-[25rem] w-[25rem] animate-brightness_bright object-contain"
      />
      <ProductViewDescription
        changeMainImageModel={changeMainImageModel}
        currentModelData={currentModel}
      />
    </div>
  );
}

export default ProductImageView;
