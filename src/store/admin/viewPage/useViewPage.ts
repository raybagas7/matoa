import { create } from "zustand";
import { createZusSelector } from "../../createZusSelector";
import {
  AllProductData,
  ProductDescription,
  ProductModel,
} from "../../../Interfaces/Product";
import { getProduct } from "../../../utils/getProduct";
import { useLoadingBar } from "../../loadingBar/useLoadingBar";

type State = {
  initialize: boolean;
  productData: AllProductData | undefined;
  productDesc: ProductDescription | undefined;
  productModel: ProductModel[] | undefined;
  currentModel: ProductModel | undefined;
};

type Action = {
  getDataProduct: (id: string) => void;
  resetState: () => void;
  changeCurrentModel: (index: number) => void;
};
const useViewPageBase = create<State & Action>()((set) => ({
  initialize: true,
  productData: undefined,
  productDesc: undefined,
  productModel: undefined,
  currentModel: undefined,
  getDataProduct: async (id: string) => {
    const loadingBarActions = useLoadingBar.getState();
    loadingBarActions.showLoading();
    const response: AllProductData = await getProduct(id);
    const { model, ...description } = response;
    if (response) {
      set({
        initialize: false,
        productData: response,
        productDesc: description,
        productModel: model,
        currentModel: model[0],
      });
    }
    loadingBarActions.hideLoading();
  },
  resetState: () => {
    set({ initialize: true, productData: undefined });
  },
  changeCurrentModel: (index: number) => {
    set((state) => ({ currentModel: state.productModel![index] }));
  },
}));

export const useViewPage = createZusSelector(useViewPageBase);
