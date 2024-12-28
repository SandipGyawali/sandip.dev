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
  const fullScreen = () => {
    const _curElem = _ref.current;
    if (_curElem)
      if (_curElem.requestFullscreen) {
        _curElem.requestFullscreen();
      }
  };

  /**
   * exit fullscreen with browser api
   */
  const exitFullScreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
  };

  /**
   *
   */
  const handleFullScreen = () => {
    if (!document.fullscreenElement) fullScreen();
    else exitFullScreen();
  };

  useEffect(() => {
    (async () => {
      try {
        if (!document.fullscreenElement)
          await document.body.requestFullscreen();
        else document.exitFullscreen();
      } catch (err: unknown) {
        console.log(err);
      }
    })();

    return () => {
      if (document.fullscreenElement) document.exitFullscreen();
    };
  }, []);

  return (
    <div
      className="flex h-screen flex-col items-center justify-center gap-2 bg-[url('/terminal_background.png')] bg-cover bg-center bg-no-repeat"
      ref={_ref}
      onClick={handleFullScreen}
    >
      <CommandLine />
    </div>
  );
}

export default TerminalPage;
