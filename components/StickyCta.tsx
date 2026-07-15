"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const footer = document.querySelector(".site-footer");
      const footerNear = footer
        ? footer.getBoundingClientRect().top < window.innerHeight + 80
        : false;
      setShow(y > window.innerHeight * 0.7 && !footerNear);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta${show ? " show" : ""}`} id="stickyCta">
      <Link href={siteConfig.contactUrl} className="btn btn-primary btn-sm">
        Talk to a Dog Expert
      </Link>
    </div>
  );
}
