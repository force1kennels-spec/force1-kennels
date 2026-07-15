"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function Nav() {
  const scrolled = useScrollPosition((y) => y > 40);
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="container nav-inner">
          <Link href="#top" className="logo" aria-label="Force 1 Kennels home">
            <Image
              className="logo-img"
              src="/images/force-1-kennels-icon.png"
              alt="Force 1 Kennels icon"
              width={387}
              height={497}
              style={{ height: 60, width: "auto" }}
              priority
            />
            <span className="logo-text">
              <b>
                FORCE <span className="gold">1 KENNELS</span>
              </b>
              <span>ELITE K9 &amp; COMPANION DOGS</span>
            </span>
          </Link>

          <div className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <Link href={siteConfig.contactUrl} className="btn btn-outline-dark btn-sm">
              Talk to a Dog Expert
            </Link>
            <button
              className="nav-burger"
              id="burger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobilePanel"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-panel${menuOpen ? " open" : ""}`} id="mobilePanel">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link
          href={siteConfig.contactUrl}
          className="btn btn-primary"
          style={{ marginTop: 10 }}
          onClick={() => setMenuOpen(false)}
        >
          Talk to a Dog Expert
        </Link>
      </div>
    </>
  );
}
