import Image from "next/image";
import Reveal from "@/components/Reveal";
import { defenceFeature } from "@/lib/data";

export default function DefenceFeature() {
  return (
    <section className="defence-feature">
      <div className="container">
        <Reveal className="defence-feature-head">
          <div className="eyebrow">{defenceFeature.eyebrow}</div>
          <h2>{defenceFeature.heading}</h2>
          <p>{defenceFeature.description}</p>
        </Reveal>
        <Reveal className="defence-feature-image" scale>
          <Image
            src={defenceFeature.image}
            alt={defenceFeature.alt}
            fill
            sizes="(max-width: 1100px) 100vw, 1200px"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            loading="lazy"
          />
        </Reveal>
        <div className="defence-feature-caption">{defenceFeature.caption}</div>
      </div>
    </section>
  );
}
