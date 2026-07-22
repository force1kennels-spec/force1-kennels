"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function Nav() {
  const scrolled = useScrollPosition((y) => y > 40);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  // On the contact page itself, the CTA scrolls to the form instead of
  // re-navigating to the same page.
  const ctaHref = pathname === "/contact" ? "#enquiry" : "/contact";

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="container nav-inner">
          <Link href="/" className="logo" aria-label="Force 1 Kennels home">
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
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "active" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-cta">
            <Link href={ctaHref} className="btn btn-outline-dark btn-sm">
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
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={ctaHref}
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
