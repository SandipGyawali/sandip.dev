"use client";

import { useEffect, useRef } from "react";

/**
 *
 * @returns react component
 */
function TerminalPage() {
  const _ref = useRef<HTMLDivElement>(null);

  /**
   * fullscreen with browser api
   */
  const fullScreen = () => {
    const _curElem = _ref.current;
    if (_curElem && _curElem.requestFullscreen) _curElem.requestFullscreen();
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
    try {
      (async () => {
        if (!document.fullscreenElement)
          await document.body.requestFullscreen();
        else document.exitFullscreen();
      })();
    } catch (err: unknown) {
      console.error(err);
    }
  }, []);

  return (
    <div className="h-screen w-screen" ref={_ref} onClick={handleFullScreen}>
      This is terminal section
    </div>
  );
}

export default TerminalPage;
