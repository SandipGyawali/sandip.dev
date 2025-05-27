"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main
      ref={wrapperRef}
      className={cn("relative flex-1 flex-col overflow-x-hidden")}
    >
      {children}
    </main>
  );
}

export default ScrollWrapper;
