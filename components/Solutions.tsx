import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { workingDogs, privateCollection, workingDogsUsp } from "@/lib/data";

const arrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Solutions() {
  return (
    <section className="solutions section-pad" id="solutions">
      <div className="container">
        <Reveal className="solutions-intro">
          <div className="eyebrow">Canine Solutions</div>
          <h2>Canine solutions for every requirement</h2>
          <p>
            Whether you&apos;re supporting critical operations, strengthening security, or welcoming
            a trusted companion, Force 1 Kennels matches you with the right dog based on your purpose,
            environment, and lifestyle. Every placement is guided by expert evaluation, proven
            bloodlines, and professional standards.
          </p>
        </Reveal>

        {/* Professional working dogs */}
        <div className="subblock">
          <div className="subblock-head">
            <div>
              <h3>Professional working dogs</h3>
              <p>
                Purpose-bred and professionally developed for intelligence, confidence, reliability,
                and performance in demanding operational environments.
              </p>
            </div>
            <div className="usp-tag">
              <span className="dicon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <span>{workingDogsUsp}</span>
            </div>
          </div>

          <div className="cat-grid stagger">
            {workingDogs.map((dog) => (
              <Reveal className="cat-card" key={dog.title}>
                <div className="cat-img">
                  <Image src={dog.image} alt={dog.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw" style={{ objectFit: "cover", objectPosition: "center 20%" }} loading="lazy" />
                </div>
                <div className="cat-body">
                  <h4>{dog.title}</h4>
                  <ul>
                    {dog.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="gov-banner">
            <div className="gicon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M4 21h16M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
              </svg>
            </div>
            <div>
              <h4>Government &amp; institutional programs</h4>
              <p>
                Professional canine solutions for defence forces, law enforcement, paramilitary
                organisations, government agencies, and institutional requirements, with handler
                training available where required.
              </p>
            </div>
          </Reveal>

          <Reveal className="subblock-cta">
            <Link href="/#breeds" className="text-link">
              Explore working dogs {arrowIcon}
            </Link>
          </Reveal>
        </div>

        {/* Private collection */}
        <div className="subblock" id="solutions-private">
          <div className="subblock-head">
            <div>
              <h3>Private collection</h3>
              <p>
                Elite companion dogs selected for exceptional temperament, health, pedigree, and
                lifelong companionship.
              </p>
            </div>
          </div>

          <div className="priv-grid stagger">
            {privateCollection.map((dog) => (
              <Reveal className="priv-card" key={dog.title}>
                <Image src={dog.image} alt={dog.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 25vw" style={{ objectFit: "cover" }} loading="lazy" />
                <div className="priv-overlay" />
                <div className="priv-body">
                  <h4>{dog.title}</h4>
                  <p>{dog.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="subblock-cta">
            <Link href="/#breeds" className="text-link">
              Discover the private collection {arrowIcon}
            </Link>
          </Reveal>
        </div>

        {/* Consultation */}
        <Reveal className="consult-banner" id="consult">
          <div>
            <h3>Need help choosing the right dog?</h3>
            <p>
              Every requirement is unique. Our experts take the time to understand your lifestyle,
              experience, and objectives before recommending the ideal canine partner.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Talk to a dog expert {arrowIcon}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
