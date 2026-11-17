import { create } from "zustand";

export type CartItem = {
  slug: string;
  title: string;
  priceHuf: number;
  size: string;
};

type CartState = {
  items: CartItem[];
  open: boolean;
  add: (item: CartItem) => void;
  remove: (slug: string) => void;
  setOpen: (open: boolean) => void;
};

export const useCart = create<CartState>((set) => ({
  items: [],
  open: false,
  add: (item) =>
    set((state) => ({
      open: true,
      items: state.items.some((entry) => entry.slug === item.slug)
        ? state.items
        : [...state.items, item],
    })),
  remove: (slug) =>
    set((state) => ({
      items: state.items.filter((entry) => entry.slug !== slug),
    })),
  setOpen: (open) => set({ open }),
}));
