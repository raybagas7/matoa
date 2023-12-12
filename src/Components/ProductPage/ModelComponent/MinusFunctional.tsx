interface ImageProduct {
  img: string;
  index: number;
  onProductImgRemove: (url: string, index: number) => void;
}

const MinusFunctional = ({ img, index, onProductImgRemove }: ImageProduct) => {
  return (
    <div className="flex justify-between bg-[#F1F1F1]">
      <img className="h-[80px] w-[60px] object-cover" src={img} alt={img} />
      <button
        type="button"
        className="flex h-full w-fit cursor-pointer items-center bg-primary px-[10px]"
        onClick={() => onProductImgRemove(img, index)}
      >
        <div className="text-[36px] text-white">-</div>
      </button>
    </div>
  );
};

export default MinusFunctional;
