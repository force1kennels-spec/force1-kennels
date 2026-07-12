import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="final-cta" id="enquire">
      <div className="final-bg">
        <Image
          src="/images/dramatic-portrait-of-a-working-dog.jpg"
          alt="Dramatic portrait of a working dog"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <Reveal className="final-inner">
        <h2>Experience the Force 1 Standard.</h2>
        <p>Prepared for every mission. Chosen for every home.</p>
        <div className="final-actions">
          <Link href="#contact" className="btn btn-primary">
            Talk to a Dog Expert
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link href="#breeds" className="btn btn-outline-light">
            Explore Our Dogs
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
