"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
}

/**
 * Animates a number counting up from 0 to `target` once it scrolls
 * into view, using an eased requestAnimationFrame loop (matches the
 * original vanilla-JS counter animation).
 */
export default function Counter({ target }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const duration = 1600;
          const start = performance.now();

          function tick(now: number) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * target));
            if (p < 1) {
              requestAnimationFrame(tick);
            } else {
              setValue(target);
            }
          }

          requestAnimationFrame(tick);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="counter">
      {value}
    </span>
  );
}
