import { create } from "zustand";

interface PaginationState {
  page: number;
  setPage: (p: number) => void;
}

export const usePagination = create<PaginationState>((set) => ({
  page: 1,
  setPage: (p) => set({ page: p }),
}));
