"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className="fixed bottom-4 right-4 z-[100] bg-zinc-50 dark:bg-zinc-900 border border-zinc-950 dark:border-zinc-100 p-3 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
      onClick={() => {
        window.scrollTo({
          top: 0,
        });
      }}
    >
      <ArrowUp className="size-5" />
    </button>
  );
};
