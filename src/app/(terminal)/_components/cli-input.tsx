"use client";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BiGitBranch } from "react-icons/bi";

interface CommandLineProps {
  value: string;
  disable: boolean;
}

function CommandLineInput({ value, disable }: CommandLineProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>(value);

  console.log(input);
  useEffect(() => {
    if (inputRef) inputRef.current?.focus();
  }, []);

  /**
   * handle the key down event
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setInput("");
    }
  };

  return (
    <div className={cn("pt-4")}>
      <div className="flex items-center">
        <div className="flex">
          {/* 1st term */}
          <div
            className="z-20 flex items-center gap-2 bg-[#B16286] pl-3 pr-4 py-[1px]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%, 0 50%)", // Reverse V shape
            }}
          >
            <p className="text-white font-medium text-sm">root</p>
          </div>
          {/* 2nd */}
          <div
            className="z-20 flex items-center gap-2 bg-[#458588]/80 pl-3 pr-4 py-[1px]"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)", // V shape again
            }}
          >
            <p className="text-white font-medium text-sm">sandip</p>
          </div>

          {/* 3rd term */}
          <div className="z-20 flex items-center gap-2 pl-2 pr-4 py-[1px]">
            <BiGitBranch className="h-5 w-5 text-[#FABD2F]/90" />
            <p className="text-white/85 font-medium text-sm">Branch</p>
          </div>
        </div>
      </div>
      {/* input command  */}
      <div className="flex  gap-2 items-center justify-start mt-2">
        <ChevronsRight className="h-5 w-5 text-white flex-shrink-0 ml-1" />
        <input
          type="text"
          className="bg-transparent text-white border-none outline-none h-8"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          disabled={disable}
        />
      </div>
    </div>
  );
}

export default CommandLineInput;
