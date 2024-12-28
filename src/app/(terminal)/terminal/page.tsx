"use client";
import { useEffect, useRef } from "react";
import CommandLine from "../_components/cli";

/**
 * @returns react component
 */
function TerminalPage() {
  const _ref = useRef<HTMLDivElement>(null);

  /**
   * fullscreen with browser api
   */
  const fullScreen = async () => {
    const _curElem = _ref.current;
    if (_curElem)
      if (_curElem.requestFullscreen) {
        await _curElem.requestFullscreen();
      }
  };

  /**
   * exit fullscreen with browser api
   */
  const exitFullScreen = async () => {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    }
  };

  /**
   *
   */
  const handleFullScreen = () => {
    if (!document.fullscreenElement) fullScreen();
    else exitFullScreen();
  };

  useEffect(() => {
    return () => {
      if (document.fullscreenElement) document.exitFullscreen();
    };
  }, []);

  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-2 bg-[url('/terminal_background.png')] bg-cover bg-center bg-no-repeat"
      ref={_ref}
      onDoubleClick={handleFullScreen}
    >
      <CommandLine />
    </div>
  );
}

export default TerminalPage;
