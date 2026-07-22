import Image from "next/image";
import { aboutHeader } from "@/lib/data";

export default function AboutHeader() {
  return (
    <header className="about-hero" id="top">
      <div className="about-hero-bg">
        <Image
          src={aboutHeader.image}
          alt={aboutHeader.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container about-hero-inner">
        <div className="about-header-copy">
          <h1>
            <span className="legacy-line">{aboutHeader.legacyLine}</span>{" "}
            <span className="accent-line">{aboutHeader.accentLine}</span>
          </h1>
          <p>{aboutHeader.description}</p>
        </div>
      </div>
    </header>
  );
}
