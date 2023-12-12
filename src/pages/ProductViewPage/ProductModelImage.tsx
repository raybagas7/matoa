import { useState } from "react";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";

interface IProductModelImage {
  imgVariant: string[];
  changeMainImage: (position: number) => void;
}

function ProductModelImage({
  imgVariant,
  changeMainImage,
}: IProductModelImage) {
  const [activeUrl, setActiveUrl] = useState<number>(0);
  const [showTopArrow, setShowTopArrow] = useState<boolean>(false);
  const [showBottomArrow, setshowBottomArrow] = useState<boolean>(
    imgVariant.length > 4,
  );
  const smallPict = document.getElementById("model-small-pict");

  const handleScroll = () => {
    let position = smallPict?.scrollTop;

    if (position) {
      if (position < 100) {
        setShowTopArrow(false);
      } else if (position >= 100) {
        setShowTopArrow(true);
      }
      if (position < (imgVariant.length - 4) * 100) {
        setshowBottomArrow(true);
      } else if (position >= (imgVariant.length - 4) * 100) {
        setshowBottomArrow(false);
      }
    }
  };

  const onHover = (index: number) => {
    changeMainImage(index);
  };

  const onClickImage = (index: number) => {
    setActiveUrl(index);
  };

  const onLeaveHover = () => {
    changeMainImage(activeUrl);
  };

  const onClickBottom = () => {
    if (smallPict) {
      smallPict.scrollTop += 100;
    }
  };
  const onClickTop = () => {
    let position = smallPict?.scrollTop;

    if (smallPict) {
      if (position) {
        if (position === 124) {
          smallPict.scrollTop = 0;
        } else {
          smallPict.scrollTop -= 100;
        }
      }
    }
  };

  return (
    <div>
      <div
        onScroll={handleScroll}
        id="model-small-pict"
        className="relative h-[25rem] w-[6.25rem] overflow-y-scroll scroll-smooth"
      >
        <BsArrowUpSquareFill
          onClick={onClickTop}
          className={`sticky left-0 right-0 top-0 z-50 m-auto h-6 w-6 cursor-pointer text-primary/30 transition-colors hover:text-primary hover:transition-colors ${
            showTopArrow ? "visible" : "hidden"
          }`}
        />
        {imgVariant.map((img, index) => (
          <img
            onClick={() => onClickImage(index)}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={onLeaveHover}
            className={`
            ${
              activeUrl !== index
                ? "opacity-50 hover:border-secondary"
                : "border-2 border-primary"
            }
            h-[6.25rem] w-[6.25rem] cursor-pointer rounded-lg object-contain transition hover:border-2 hover:opacity-100 hover:transition`}
            src={img as string}
            key={img as string}
            alt="side-scroll"
          />
        ))}

        <BsArrowDownSquareFill
          onClick={onClickBottom}
          className={`sticky bottom-0 left-0 right-0 m-auto h-6 w-6 cursor-pointer text-primary/30 transition-colors hover:text-primary hover:transition-colors ${
            showBottomArrow ? "visible" : "hidden"
          }`}
        />
      </div>
    </div>
  );
}

export default ProductModelImage;
