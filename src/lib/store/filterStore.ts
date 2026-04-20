import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilterStore {
  language: string;
  level: string;
  price: string;

  setLanguage: (language: string) => void;
  setLevel: (level: string) => void;
  setPrice: (price: string) => void;
  resetFilters: () => void;
}

export const useCourseFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name: "teachers-filter", // localStorage key
      partialize: (state) => ({
        language: state.language,
        level: state.level,
        price: state.price,
      }),
    },
  ),
);
