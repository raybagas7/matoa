import { create } from "zustand";
import { createZusSelector } from "../createZusSelector";
import {
  AllProductData,
  ProductDescription,
  ProductModel,
} from "../../Interfaces/Product";
import { getProduct } from "../../utils/getProduct";
import { useLoadingBar } from "../loadingBar/useLoadingBar";
import api from "../../utils/api";

type State = {
  initialize: boolean;
  productTopFour: AllProductData[] | undefined;
};

type Action = {
  getDataProduct: () => void;
  resetState: () => void;
};
const useHomeProductBase = create<State & Action>()((set) => ({
  initialize: true,
  productTopFour: undefined,
  getDataProduct: async () => {
    const loadingBarActions = useLoadingBar.getState();
    loadingBarActions.showLoading();
    try {
      const response: AllProductData[] = await api.getTopFour();
      if (response) {
        set({
          initialize: false,
          productTopFour: response,
        });
      }
      loadingBarActions.hideLoading();
    } catch (e) {
      throw e;
    }
  },
  resetState: () => {
    set({ initialize: true, productTopFour: undefined });
  },
}));

export const useHomeProduct = createZusSelector(useHomeProductBase);
