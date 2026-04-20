import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteStore {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set) => ({
      favorites: [],

      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((fav) => fav !== id)
            : [...state.favorites, id],
        })),
    }),
    {
      name: "camper-favorite",
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    },
  ),
);
