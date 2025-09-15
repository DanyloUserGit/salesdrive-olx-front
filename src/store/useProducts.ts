import { create } from "zustand";

interface ProductsState {
  product: string[];
  setProduct: (p: string[]) => void;
  selectProduct: boolean;
  setSelectProduct: (p: boolean) => void;
}

export const useProducts = create<ProductsState>((set) => ({
  product: [],
  setProduct: (p) => set({ product: p }),
  selectProduct: false,
  setSelectProduct: (p) => set({ selectProduct: p }),
}));
