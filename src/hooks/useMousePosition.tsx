"use client";
import { useEffect, useState } from "react";
import { Variants } from "framer-motion";
import { useCursorVariantStore } from "@/store/CursorVariantStore";

// mast cursor
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const { cursorVariant, setCursorVariant } = useCursorVariantStore();

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 160,
      width: 160,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return { ...mousePosition, variants, setCursorVariant, cursorVariant };
}

export default useMousePosition;
