import CommandLineBody from "./body";
import CommandLineHeader from "./header";
import { motion, AnimatePresence } from "framer-motion";

function CommandLine() {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full lg:w-[60vw]"
        initial={{ opacity: 0, scale: 0.5 }} // Start from small and transparent
        animate={{ opacity: 1, scale: 1 }} // Grow to normal size and full opacity
        exit={{ opacity: 0, scale: 0.5 }} // Shrink and fade out when exiting
        transition={{ duration: 0.6 }} // Smooth transition duration
      >
        <CommandLineHeader />
        <CommandLineBody />
      </motion.div>
    </AnimatePresence>
  );
}

export default CommandLine;
