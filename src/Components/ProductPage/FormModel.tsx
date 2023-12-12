import React, { useState } from "react";
import { ProductModel } from "../../Interfaces/Product";
import SingleModelForm from "./ModelComponent/SingleModelForm";
import { idGenerator } from "../../utils/idGenerator";

interface ProductAction {
  goNext: () => void;
  goBack: () => void;
  onSaveProductModel: (productModel: ProductModel[]) => void;
  nextButtonRef: any;
  containModels?: ProductModel[];
  edit?: boolean;
}

const FormModel = ({
  goBack,
  goNext,
  onSaveProductModel,
  nextButtonRef,
  containModels,
  edit,
}: ProductAction) => {
  const [disableNext, setDisableNext] = useState(true);
  const [totalModel, setTotalModel] = useState<ProductModel[]>(
    containModels
      ? containModels
      : [
          {
            id: idGenerator(),
            name: null,
            photos: [],
            picture: null,
            qty: null,
            index: 0,
          },
        ],
  );

  const nextPageStatus = (status: boolean) => {
    setDisableNext(status);
  };

  const nextPageHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    goNext();
    onSaveProductModel(totalModel);
  };

  const backPageHandler = () => {
    goBack();
  };

  const totalModelHandler = ({ index }: ProductModel) => {
    console.log("a", index);

    const newModel = [...totalModel];
    if (typeof index == "number") {
      newModel[index + 1] = {
        id: idGenerator(),
        name: null,
        photos: [],
        picture: null,
        qty: null,
        index: index + 1,
      };
    }

    console.log(newModel);

    setTotalModel(newModel);
  };

  const changeModelHandler = ({
    id,
    name,
    photos,
    picture,
    qty,
    index,
  }: ProductModel) => {
    const newModel = [...totalModel];
    if (typeof index == "number") {
      newModel[index] = {
        id,
        name,
        photos,
        picture,
        qty,
        index,
      };
    }
    setTotalModel(newModel);
  };
  console.log("totalmodel", totalModel);

  const removeModelHandler = ({ index }: ProductModel) => {
    setTotalModel((prevModel) => {
      return prevModel.filter((_, i) => i !== index);
    });
  };

  return (
    <div className={`ml-[22vw] h-[100vh] w-[78vw] overflow-auto p-[85px]`}>
      <h1 className="text-[24px] font-semibold">
        {edit ? "EDIT" : "ADD"} NEW PRODUCT 2/3
      </h1>
      <h2 className="font-semibold">MODEL</h2>
      <form
        className="relative flex h-full flex-col gap-5 "
        onSubmit={nextPageHandler}
      >
        {!edit
          ? totalModel.map((model, index) => {
              return (
                <SingleModelForm
                  key={model.id}
                  changeModelHandler={changeModelHandler}
                  totalModelHandler={totalModelHandler}
                  removeModelHandler={removeModelHandler}
                  position={index}
                  totalModelLength={totalModel.length}
                  nextPageStatus={nextPageStatus}
                  modelId={model.id as string}
                />
              );
            })
          : totalModel.map((model, index) => (
              <SingleModelForm
                key={model.id}
                modelId={model.id as string}
                changeModelHandler={changeModelHandler}
                totalModelHandler={totalModelHandler}
                removeModelHandler={removeModelHandler}
                position={index}
                totalModelLength={totalModel.length}
                singleModel={model}
                nextPageStatus={nextPageStatus}
                edit
              />
            ))}
        <div className="flex flex-row-reverse gap-5">
          <button
            type="submit"
            disabled={disableNext}
            className="w-fit bg-primary px-[28px] py-[12px] text-[15px] text-white disabled:bg-black"
          >
            Next
          </button>
          <button
            ref={nextButtonRef}
            type="button"
            onClick={backPageHandler}
            className="w-fit bg-primary px-[28px] py-[12px] text-[15px] text-white"
          >
            Prev
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormModel;
