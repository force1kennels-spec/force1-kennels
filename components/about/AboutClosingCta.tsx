import Link from "next/link";
import Reveal from "@/components/Reveal";
import { aboutClosingCta } from "@/lib/data";

export default function AboutClosingCta() {
  return (
    <section className="closing-cta">
      <div className="container">
        <Reveal>
          <h2>{aboutClosingCta.heading}</h2>
          <p>{aboutClosingCta.description}</p>
          <div className="closing-actions">
            <Link href="/contact" className="btn btn-primary">
              Talk to a Dog Expert
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/#breeds" className="btn btn-outline-dark">
              Explore Our Dogs
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
