import Link from "next/link";
import { ChevronLeft, X } from "lucide-react";

function CommandLineHeader() {
  return (
    <div className="flex items-center rounded-t-md bg-[#465c4c]/80 px-4 py-2">
      <div className="flex items-center gap-2">
        <Link href="/" className="size-3 rounded-full" />

        <Link href="/" className="cursor-pointer">
          <ChevronLeft className="text-white" />
        </Link>
      </div>
      <div className="flex-1 text-center text-white font-semibold">
        Sandip Gyawali / Portfolio
      </div>

      <button
        onClick={() => {
          if (document.fullscreenEnabled) document.exitFullscreen();
        }}
        className="flex items-center justify-center size-4 rounded-full bg-red-400"
      >
        <X className="text-white w-3.5 h-3.5" />
      </button>
    </div>
  );
}

export default CommandLineHeader;
