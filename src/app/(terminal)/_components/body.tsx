"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import CommandLineInput from "./cli-input";
import { useEffect, useRef } from "react";

function CommandLineBody() {
  const _scroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (_scroll.current)
      _scroll.current.scrollIntoView({
        behavior: "smooth",
      });
  }, []);

  return (
    <ScrollArea className="border-1 h-[60vh] w-full bg-black">
      <div>
        <div className="px-4"></div>
        <CommandLineInput value="" disable={false} />
      </div>
      {/* scrollbar ref */}
      <div ref={_scroll} />
    </ScrollArea>
  );
}

export default CommandLineBody;
