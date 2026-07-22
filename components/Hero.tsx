import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-bg">
        <Image
          src="/images/belgian-malinois-in-protection-training-with-handl.jpg"
          alt="Belgian Malinois in protection training with handler"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-tag">Force 1</div>
        <h1>
          Elite K9 and companion dogs for global defence forces, security professionals and family
          homes
        </h1>
        <p>
          Serving certified premium bloodlines, professionally trained and raised to excel in
          service, protection and companionship.
        </p>
        <div className="hero-actions">
          <Link href="#solutions" className="btn btn-primary">
            Explore our services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Talk to a dog expert
          </Link>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>SCROLL</span>
        <div className="line" />
      </div>
    </header>
  );
}
