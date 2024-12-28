"use client";
import { cn } from "@/lib/utils";
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
        <div className="z-20 flex gap-2 rounded-full bg-green-500 px-4 py-1">
          <p>Sandip</p>
        </div>

        {value && (
          <div className="">
            <BiGitBranch className="size-5" />
            <p>{value}</p>
          </div>
        )}
      </div>
      {/* input command  */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="bg-transparent text-white"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          disabled={disable}
        />
      </div>
    </div>
  );
}

export default CommandLineInput;
