import { create } from "zustand";
import { createZusSelector } from "../createZusSelector";

type State = {
  show: boolean;
};

type Actions = {
  showLoading: () => void;
  hideLoading: () => void;
};

const useLoadingBarBase = create<State & Actions>((set) => ({
  show: false,
  showLoading: () => set(() => ({ show: true })),
  hideLoading: () => set(() => ({ show: false })),
}));

export const useLoadingBar = createZusSelector(useLoadingBarBase);
