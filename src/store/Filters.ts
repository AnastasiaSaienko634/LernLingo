import { create } from "zustand";

interface FilterStore {
  language: string;
  level: string;
  price: string;

  setLanguage: (language: string) => void;
  setLevel: (level: string) => void;
  setPrice: (price: string) => void;
  resetFilters: () => void;
}

export const useCourseFilterStore = create<FilterStore>((set) => ({
  language: "",
  level: "",
  price: "",

  setLanguage: (language) => set({ language }),
  setLevel: (level) => set({ level }),
  setPrice: (price) => set({ price }),

  resetFilters: () =>
    set({
      language: "",
      level: "",
      price: "",
    }),
}));
