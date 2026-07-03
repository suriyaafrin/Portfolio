import { create } from "zustand";


const useNavStore = create((set) => ({
  isMenuOpen: false,
  isScrolled: false,

  toggleMenu: () =>
    set((state) => ({ isMenuOpen: !state.isMenuOpen })),

  closeMenu: () => set({ isMenuOpen: false }),

  setScrolled: (value) => set({ isScrolled: value }),
}));

export default useNavStore;