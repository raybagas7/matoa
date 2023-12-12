import React, { useEffect, useState } from "react";
import Input from "../../Custom/Input";
import UploadButton from "../../Custom/UploadButton";
import MinusFunctional from "./MinusFunctional";
import PlusButton from "../../Custom/PlusButton";
import { ProductModel } from "../../../Interfaces/Product";

interface SingleFormFunctional {
  changeModelHandler: ({
    id,
    name,
    photos,
    picture,
    qty,
    index,
  }: ProductModel) => void;
  totalModelHandler: ({ index }: ProductModel) => void;
  removeModelHandler: ({ index }: ProductModel) => void;
  position: number;
  totalModelLength: number;
  singleModel?: ProductModel;
  nextPageStatus: (status: boolean) => void;
  edit?: boolean;
  modelId: string;
}

function SingleModelForm({
  changeModelHandler,
  totalModelHandler,
  removeModelHandler,
  position,
  totalModelLength,
  singleModel,
  nextPageStatus,
  edit,
  modelId,
}: SingleFormFunctional) {
  const [inModelName, setInModelName] = useState<string>(
    singleModel ? (singleModel.name as string) : "",
  );
  const [modelImg, setModelImg] = useState<File | string | null>(
    singleModel ? (singleModel.picture as string) : null,
  );
  const [imgProducts, setImgProducts] = useState<(File | string)[]>(
    singleModel ? (singleModel.photos as string[]) : [],
  );
  const [inQuantity, setInQuantity] = useState<number>(
    singleModel ? (singleModel.qty as number) : 0,
  );

  useEffect(() => {
    if (inModelName && modelImg && imgProducts.length > 0 && inQuantity > 0) {
      nextPageStatus(false);
    } else {
      nextPageStatus(true);
    }
  }, [inModelName, modelImg, imgProducts, inQuantity, nextPageStatus]);

  const onQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInQuantity(parseInt(event.target.value));
  };

  const onModelNameChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInModelName(event.target.value);
  };

  const onModelImgChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      setModelImg(file);
      changeModelHandler({
        id: modelId,
        name: inModelName,
        photos: imgProducts,
        picture: file,
        qty: inQuantity,
        index: position,
      });
    } else {
      return;
    }
  };
  const onProductImgAdd = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      setImgProducts([...imgProducts, file]);
      changeModelHandler({
        id: modelId,
        name: inModelName,
        photos: [...imgProducts, file],
        picture: modelImg,
        qty: inQuantity,
        index: position,
      });
    } else {
      return;
    }
  };

  const onProductImgRemove = (url: string, index: number) => {
    const removedFileImg = imgProducts.filter((_, i) => i !== index);

    setImgProducts(removedFileImg);
    changeModelHandler({
      id: modelId,
      name: inModelName,
      photos: removedFileImg,
      picture: modelImg,
      qty: inQuantity,
      index: position,
    });
  };

  const onChangeModelItem = () => {
    changeModelHandler({
      id: modelId,
      name: inModelName,
      photos: imgProducts,
      picture: modelImg,
      qty: inQuantity,
      index: position,
    });
  };

  const onAddModelItem = () => {
    setImgProducts([...imgProducts]);
    totalModelHandler({
      index: position,
    });
  };

  const onRemoveModelItem = () => {
    console.log("remove position", position);

    removeModelHandler({ index: position });
  };

  return (
    <div className="flex flex-col gap-5 border-2 p-5 shadow-lg">
      <div>
        <Input
          name={`modelName${position}`}
          label="Model Name"
          className="w-full rounded-[4px] bg-[#F1F1F1] p-4"
          onChange={onModelNameChage}
          addOnBlur={onChangeModelItem}
          value={inModelName}
          type="text"
          placeholder={"ex: kayu jati mod"}
          required
        />
      </div>
      <div className="flex w-fit items-center gap-5">
        {modelImg && (
          <img
            className="h-[60px] w-[60px] rounded-full object-cover"
            src={
              modelImg instanceof File
                ? URL.createObjectURL(modelImg as File)
                : (modelImg as string)
            }
            alt=""
          />
        )}
        <Input
          name={`uploadImage${position}`}
          label="Upload Image"
          type="file"
          kind="image"
          accept="image/png, image/jpeg"
          className="w-32"
          iconButton={<UploadButton />}
          onChange={onModelImgChange}
          required={edit ? false : true}
        ></Input>
      </div>
      <h3 className="text-[20px]">Image Product</h3>
      <div className="flex">
        <div className="grid flex-1 grid-cols-3 gap-5">
          {imgProducts &&
            imgProducts.map((img, index) => (
              <MinusFunctional
                key={index}
                img={
                  img instanceof File
                    ? URL.createObjectURL(img as File)
                    : (img as string)
                }
                index={index}
                onProductImgRemove={onProductImgRemove}
              />
            ))}
        </div>
        <div className="flex w-fit items-center gap-5">
          <Input
            name={`productImage${position}`}
            label="Product Image"
            kind="image"
            type="file"
            accept="image/png, image/jpeg"
            className={`${imgProducts && imgProducts.length && "hidden"} w-32`}
            iconButton={<PlusButton />}
            onChange={onProductImgAdd}
            required={edit ? false : true}
          ></Input>
        </div>
      </div>
      <div className="w-[50%]">
        <Input
          name={`quantity${position}`}
          label="Quantity"
          type="number"
          className="w-full rounded-[4px] bg-[#F1F1F1] p-4"
          onChange={onQuantityChange}
          addOnBlur={onChangeModelItem}
          value={inQuantity === 0 ? "" : String(inQuantity)}
          placeholder="EX : 5"
          minValue={1}
          required
        />
      </div>
      <div className="flex flex-row-reverse gap-5">
        {totalModelLength - 1 === position && (
          <button
            type="button"
            className="w-fit bg-primary px-[28px] py-[12px] text-[15px] text-white"
            onClick={onAddModelItem}
          >
            Add Model
          </button>
        )}
        {position !== 0 && (
          <button
            type="button"
            className="w-fit bg-primary px-[28px] py-[12px] text-[15px] text-white"
            onClick={onRemoveModelItem}
          >
            Remove Model
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleModelForm;
