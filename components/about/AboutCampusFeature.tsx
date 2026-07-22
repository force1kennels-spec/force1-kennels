import Image from "next/image";
import Reveal from "@/components/Reveal";
import { campusFeature } from "@/lib/data";

export default function AboutCampusFeature() {
  return (
    <section className="feature-section alt">
      <div className="container">
        <div className="feature-grid" style={{ padding: 0 }}>
          <Reveal className="feature-image landscape" scale>
            <Image
              src={campusFeature.image}
              alt={campusFeature.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="feature-copy">
            <div className="eyebrow">{campusFeature.eyebrow}</div>
            <h2>{campusFeature.heading}</h2>
            {campusFeature.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
