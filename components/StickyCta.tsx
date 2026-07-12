"use client";

import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function StickyCta() {
  const show = useScrollPosition(
    (y) => typeof window !== "undefined" && y > window.innerHeight * 0.7
  );

  return (
    <div className={`sticky-cta${show ? " show" : ""}`} id="stickyCta">
      <Link href="#consult" className="btn btn-primary btn-sm">
        Talk to a Dog Expert
      </Link>
    </div>
  );
}
