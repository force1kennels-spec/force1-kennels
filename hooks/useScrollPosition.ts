"use client";

import { useEffect, useState } from "react";

/**
 * Tracks window.scrollY, passed through a selector so each caller only
 * re-renders when the value it actually cares about changes.
 *
 * Example: useScrollPosition((y) => y > 40)
 */
export function useScrollPosition<T>(selector: (scrollY: number) => T): T {
  const [value, setValue] = useState<T>(() =>
    typeof window === "undefined" ? selector(0) : selector(window.scrollY)
  );

  useEffect(() => {
    function onScroll() {
      setValue(selector(window.scrollY));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}
