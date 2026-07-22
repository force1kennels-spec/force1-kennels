import Image from "next/image";
import Link from "next/link";
import { siteConfig, footerCompanyLinks, footerCerts } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo">
              <span className="logo-badge">
                <Image
                  className="logo-img"
                  src="/images/force-1-kennels-logo.png"
                  alt="Force 1 Kennels logo"
                  width={400}
                  height={394}
                  style={{ height: 57, width: "auto" }}
                />
              </span>
              <span className="logo-text">
                <b style={{ color: "#fff" }}>FORCE 1 KENNELS</b>
                <span>ELITE K9 &amp; COMPANION DOGS</span>
              </span>
            </Link>
            <p>{siteConfig.description}</p>
            <a
              href={siteConfig.instagram}
              className="foot-insta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="insta-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </span>
              <span>Explore our Instagram page</span>
            </a>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              {footerCompanyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <div className="foot-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <span>{siteConfig.shortAddress}</span>
                <br />
                <span className="ship-tag">
                  <span className="ship-tag-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" />
                    </svg>
                  </span>
                  <span className="ship-tag-label">Shipping Worldwide</span>
                </span>
              </div>
            </div>
            <div className="foot-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M4 4h16v16H4z" opacity="0" />
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </span>
            </div>
            <div className="foot-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>
                <a href={`tel:${siteConfig.phone.replace(/-/g, "")}`}>{siteConfig.phone}</a>
              </span>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© {year} Force 1 Kennels. All rights reserved.</div>
          <div className="foot-certs">
            {footerCerts.map((cert) => (
              <span key={cert}>{cert}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
