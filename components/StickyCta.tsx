"use client";

import { siteConfig } from "@/lib/data";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function StickyCta() {
  const show = useScrollPosition(
    (y) => typeof window !== "undefined" && y > window.innerHeight * 0.7
  );

  return (
    <div className={`sticky-cta${show ? " show" : ""}`} id="stickyCta">
      <a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Talk to a Dog Expert
      </a>
    </div>
  );
}
