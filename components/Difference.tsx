import Reveal from "./Reveal";
import { differenceItems, type DifferenceItem } from "@/lib/data";

const icons: Record<DifferenceItem["icon"], React.ReactNode> = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2s7 3 7 9c0 5-3 8-7 11-4-3-7-6-7-11 0-6 7-9 7-9Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21s-7-4.35-9.5-8.5C.7 9 2 5.5 5.2 5c2-.3 3.5.8 4.3 2 .8-1.2 2.3-2.3 4.3-2C17 5.5 18.3 9 16.5 12.5 14 16.65 12 21 12 21Z" />
    </svg>
  ),
  cert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  ),
  match: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M18.5 12a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z" />
      <path d="M9.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21s-7-4.35-9.5-8.5C.7 9 2 5.5 5.2 5c2-.3 3.5.8 4.3 2 .8-1.2 2.3-2.3 4.3-2C17 5.5 18.3 9 16.5 12.5 14 16.65 12 21 12 21Z" />
    </svg>
  ),
};

export default function Difference() {
  return (
    <section className="difference section-pad" id="difference">
      <div className="container">
        <Reveal className="difference-lead">
          <div className="eyebrow">The Force 1 Difference</div>
          <div className="bold-line">
            Every Force 1 dog is backed by proven bloodlines, ethical breeding, professional
            development, and uncompromising quality standards.
          </div>
        </Reveal>

        <div className="diff-grid stagger">
          {differenceItems.map((item) => (
            <Reveal className="diff-card" key={item.title}>
              <div className="diff-icon">{icons[item.icon]}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
