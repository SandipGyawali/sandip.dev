import { useEffect, useState } from "react";

export function useEasterEgg(triggerWord: string) {
  const [buffer, setBuffer] = useState("");
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setBuffer((prev) => {
        const updated = (prev + e.key).slice(-triggerWord.length);
        if (updated.toLowerCase() === triggerWord.toLowerCase()) {
          setIsActivated(true);
        }
        return updated;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [triggerWord]);

  return isActivated;
}
