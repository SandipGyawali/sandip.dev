import Link from "next/link";
import { ChevronsLeft, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CommandLineHeader() {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Monitor fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreen = document.fullscreenElement;
      setIsFullscreen(!!fullscreen);
    };

    // Add event listeners for fullscreen changes
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      // Cleanup event listeners on unmount
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Exit fullscreen handler
  const exitFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
  };

  return (
    <div className="flex items-center rounded-t-md bg-[#465c4c]/80 px-4 py-2">
      <div className="flex items-center gap-2">
        <Link href="/" className="cursor-pointer">
          <ChevronsLeft className="text-white" />
        </Link>
      </div>
      <div className="flex-1 text-center text-white font-semibold">
        Sandip Gyawali / Portfolio
      </div>

      {isFullscreen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={exitFullscreen}
          className="flex items-center justify-center size-4 rounded-full bg-red-400"
        >
          <X className="text-white w-3.5 h-3.5" />
        </motion.button>
      )}
    </div>
  );
}

export default CommandLineHeader;
