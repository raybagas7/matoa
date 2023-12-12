import React, { useEffect, useState } from "react";
import { Product } from "../../Interfaces/Product";
import Input from "../Custom/Input";

type ProductCategory = "accessories" | "pants" | "hat";

interface ProductAction {
  onSaveProduct: (product: Product) => void;
  goNext: () => void;
  nextButtonRef: React.RefObject<HTMLSelectElement>;
  containData?: Product;
}

const FormProduct = ({
  onSaveProduct,
  goNext,
  nextButtonRef,
  containData,
}: ProductAction) => {
  const [inName, setInName] = useState<string>(
    containData ? containData.name : "",
  );
  const [inPrice, setInPrice] = useState<number>(
    containData ? containData.price : 0,
  );
  const [inDiscount, setInDiscount] = useState<number>(
    containData ? containData.discount : 0,
  );
  const [inWeight, setInWeight] = useState<number>(
    containData ? containData.weight : 0,
  );
  const [inLength, setInLength] = useState<number>(
    containData ? containData.length : 0,
  );
  const [inWidth, setInWidth] = useState<number>(
    containData ? containData.width : 0,
  );
  const [inCategory, setInCategory] = useState<ProductCategory>(
    containData ? containData.category : "accessories",
  );
  const [disableNext, setDisableNext] = useState(true);

  useEffect(() => {
    if (inName && inPrice && inWeight && inLength && inCategory) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
  }, [
    inName,
    inPrice,
    inDiscount,
    inWeight,
    inLength,
    inCategory,
    containData,
  ]);

  const nextPageHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const singleProduct: Product = {
      name: inName,
      price: inPrice,
      discount: inDiscount,
      weight: inWeight,
      length: inLength,
      width: inWidth,
      category: inCategory,
    };
    goNext();
    onSaveProduct(singleProduct);
  };

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInName(event.target.value);
  };
  const onPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInPrice(parseInt(event.target.value));
  };
  const onDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInDiscount(parseInt(event.target.value));
  };
  const onWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInWeight(parseInt(event.target.value));
  };
  const onLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInLength(parseInt(event.target.value));
  };
  const onWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInWidth(parseInt(event.target.value));
  };
  const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInCategory(event.target.value as ProductCategory);
  };

  return (
    <div className={`ml-[22vw] h-[100vh] w-[78vw] p-[85px] `}>
      <h1 className="text-[24px] font-semibold">
        {containData ? "EDIT" : "ADD"} NEW PRODUCT 1/3
      </h1>
      <form
        className="relative flex h-full flex-col gap-5 border-2 p-4 shadow-lg"
        onSubmit={nextPageHandler}
      >
        <div>
          <Input
            name="productName"
            label="Product Name"
            className="w-full rounded-[4px] bg-[#F1F1F1] p-4"
            onChange={onNameChange}
            value={inName}
            required
          />
        </div>
        <div className="flex gap-[22px]">
          <Input
            name="price"
            label="Price"
            className="w-full rounded-[4px] bg-[#F1F1F1] p-4"
            onChange={onPriceChange}
            value={inPrice}
            type="number"
            placeholder={"Rp. 20000000"}
            minValue={1}
            required
          />
          <Input
            name="discount"
            label="Discount"
            type="number"
            className="w-full rounded-[4px] bg-[#F1F1F1] p-4"
            onChange={onDiscountChange}
            value={inDiscount}
            placeholder="EX : 5"
            minValue={0}
            maxValue={100}
            required
          />
        </div>
        <div className="flex gap-[22px]">
          <Input
            name="weight"
            label="Weight"
            type="number"
            className="w-full rounded-[4px] bg-[#F1F1F1] p-4"
            placeholder="EX : 200000"
            onChange={onWeightChange}
            value={inWeight}
            minValue={1}
            required
          />
          <Input
            name="length"
            label="Length"
            type="number"
            className="w-full rounded-[4px] bg-[#F1F1F1] p-4"
            value={inLength}
            placeholder="EX : 200000"
            onChange={onLengthChange}
            minValue={1}
            required
          />
          <Input
            name="width"
            label="Width"
            type="number"
            className="w-full rounded-[4px] bg-[#F1F1F1] p-4"
            value={inWidth}
            onChange={onWidthChange}
            placeholder="EX : 200000"
            minValue={1}
            required
          />
        </div>
        <div>
          <label className="text-[14px]">Category</label>
          <select
            ref={nextButtonRef}
            id="categories"
            className="w-full cursor-pointer rounded-[4px] bg-[#F1F1F1] p-4 shadow"
            name="categories"
            onChange={onCategoryChange}
            value={inCategory}
            required
          >
            <option value="" disabled>
              Choose Category
            </option>
            <option value="accessories">Accessories</option>
            <option value="pants">Pants</option>
            <option value="hat">Hat</option>
          </select>
        </div>
        <button
          disabled={disableNext}
          type="submit"
          className="absolute bottom-0 right-0 m-4 w-fit bg-primary px-[28px] py-[12px] text-[15px] text-white disabled:bg-secondary"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
