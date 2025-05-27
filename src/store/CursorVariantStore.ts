import { create } from "zustand";

type CursorVariant = "default" | "text";

interface CursorStore {
  cursorVariant: CursorVariant;
  setCursorVariant: (variant: CursorVariant) => void;
}

export const useCursorVariantStore = create<CursorStore>((set) => ({
  cursorVariant: "default",
  setCursorVariant: (cursorVariant) => set({ cursorVariant }),
}));
