import Reveal from "@/components/Reveal";
import { siteConfig, contactInfoIntro, contactInfoItems, type ContactInfoItem } from "@/lib/data";

const icons: Record<ContactInfoItem["icon"], React.ReactNode> = {
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 4h16v16H4z" opacity="0" />
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

export default function ContactInfoPanel() {
  return (
    <Reveal className="info-panel">
      <div className="info-panel-head">
        <div className="eyebrow">{contactInfoIntro.eyebrow}</div>
        <h2 style={{ fontSize: "clamp(24px,2.6vw,32px)", marginTop: 16 }}>
          {contactInfoIntro.heading}
        </h2>
        <p>{contactInfoIntro.description}</p>
      </div>

      <div className="info-list">
        {contactInfoItems.map((item) => (
          <div className="info-item" key={item.title}>
            <div className="info-icon">{icons[item.icon]}</div>
            <div className="info-body">
              <h4>{item.title}</h4>
              {item.href ? (
                <p>
                  <a href={item.href}>{item.value}</a>
                </p>
              ) : (
                <p>{item.value}</p>
              )}
              {item.showShipping && (
                <span className="ship-tag">
                  <span className="ship-tag-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" />
                    </svg>
                  </span>
                  <span className="ship-tag-label">Shipping Worldwide</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="info-panel-social">
        <span>Follow</span>
        <a href={siteConfig.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
        </a>
      </div>
    </Reveal>
  );
}
