import { useCursorVariantStore } from "@/store/CursorVariantStore";
import { motion } from "framer-motion";

export const Marquee: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setCursorVariant } = useCursorVariantStore();
  return (
    <motion.div
      onMouseEnter={() => {
        setCursorVariant("text");
      }}
      onMouseLeave={() => {
        setCursorVariant("default");
      }}
      className="w-full overflow-hidden sm:mt-24 my-16 z-10"
    >
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
        <div className="flex w-max animate-marquee [--duration:30s]">
          {children}
          {children}
        </div>
      </div>
    </motion.div>
  );
};
