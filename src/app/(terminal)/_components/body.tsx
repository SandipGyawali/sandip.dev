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
    <ScrollArea className="border-1 rounded-b-lg h-[60vh] w-full bg-black/60">
      <div>
        {/* history state greeting */}
        <div className="">
          <CommandLineInput value="greet" disable={true} type="history" />
          <h1 className="text-white text-3xl">Hello!</h1>
        </div>
        <div className="px-4"></div>
        <CommandLineInput value="" disable={false} type="current" />
      </div>
      {/* scrollbar ref */}
      <div ref={_scroll} />
    </ScrollArea>
  );
}

export default CommandLineBody;
