import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { breeds } from "@/lib/data";

export default function Breeds() {
  return (
    <section className="breeds section-pad" id="breeds">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Breed Collection</div>
          <h2>Our most popular breeds</h2>
          <p>
            Explore our most sought-after working and companion breeds. We also source and develop
            other carefully selected breeds based on client requirements.
          </p>
        </Reveal>

        <div className="breed-grid stagger">
          {breeds.map((breed) => (
            <Reveal className="breed-card" key={breed.name}>
              <Image
                src={breed.image}
                alt={breed.alt}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 33vw, 20vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
              <div className="breed-overlay" />
              <div className="breed-body">
                <div className="breed-title-wrap">
                  <h3>{breed.name}</h3>
                </div>
                <div className="tagline">{breed.tagline}</div>
                <div className="breed-tags">
                  {breed.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="breeds-more">
          <h3>Looking for another breed?</h3>
          <p>
            Beyond our core breeds, we help source carefully selected dogs through our trusted
            network of responsible breeders and international partners.
          </p>
          <Link href="#contact" className="text-link">
            Enquire about a specific breed
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
