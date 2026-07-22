import Reveal from "@/components/Reveal";
import { pillars, type Pillar } from "@/lib/data";

const icons: Record<Pillar["icon"], React.ReactNode> = {
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  ),
  mission: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  philosophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M9 18h6M10 21.5h4M12 2.5a6.5 6.5 0 0 0-3.7 11.8c.6.44 1.2 1.24 1.2 2.2h5a2.7 2.7 0 0 1 1.2-2.2A6.5 6.5 0 0 0 12 2.5Z" />
    </svg>
  ),
};

export default function AboutPillars() {
  return (
    <section className="pillars-section">
      <div className="container">
        <Reveal className="pillars-head">
          <div className="eyebrow">What Drives Us</div>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", marginTop: 16 }}>
            The foundation behind every dog we place.
          </h2>
        </Reveal>

        <div className="pillars-grid stagger">
          {pillars.map((pillar) => (
            <Reveal className="pillar" key={pillar.label}>
              <div className="pillar-icon">{icons[pillar.icon]}</div>
              <div className="pillar-label">{pillar.label}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
