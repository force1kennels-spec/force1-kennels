"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Use the scale-in variant instead of the default fade-up. */
  scale?: boolean;
}

/**
 * Adds the `is-visible` class once the element scrolls into view,
 * matching the original site's IntersectionObserver-based reveal
 * animation (see .reveal / .reveal-scale in globals.css).
 */
export default function Reveal({ children, className = "", id, scale = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = scale ? "reveal-scale" : "reveal";
  const classes = [base, visible ? "is-visible" : "", className].filter(Boolean).join(" ");

  return (
    <div ref={ref} id={id} className={classes}>
      {children}
    </div>
  );
}
