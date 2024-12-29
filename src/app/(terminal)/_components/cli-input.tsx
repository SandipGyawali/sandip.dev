"use client";
import { cn } from "@/lib/utils";
import { ChevronsRight } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { BiGitBranch } from "react-icons/bi";

interface CommandLineProps {
  value: string;
  disable: boolean;
  type: "history" | "current";
}

function CommandLineInput({ value, disable, type }: CommandLineProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>(value);

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
      <div className="flex items-center justify-between mr-3">
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
            <p className="font-medium text-sm text-[#FAF1CA]/80">(master)</p>
          </div>
        </div>

        {/* date format  */}
        <div className="flex flex-col items-end">
          <p className="text-sm text-[#FABD2F]/50 font-medium">
            {new Date().toDateString()}
          </p>
          <span className="text-sm font-medium text-[#FAF1CA]/80">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
      {/* input command  */}
      <div className="flex  gap-2 items-center justify-start">
        <ChevronsRight className="h-5 w-5 text-white flex-shrink-0 ml-1" />
        <input
          type="text"
          placeholder="Enter `help` for viewing all commands"
          className="bg-transparent w-full text-white/75 border-none outline-none h-8 placeholder:text-white/40"
          ref={inputRef}
          value={
            type == "current" ? input : value === "greet" ? "greeting" : value
          }
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={disable}
        />
      </div>
    </div>
  );
}

export default CommandLineInput;
