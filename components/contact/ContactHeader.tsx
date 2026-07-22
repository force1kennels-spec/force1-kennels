import Image from "next/image";
import Link from "next/link";
import { contactHeader } from "@/lib/data";

export default function ContactHeader() {
  return (
    <header className="contact-hero" id="top">
      <div className="contact-hero-bg">
        <Image
          src={contactHeader.image}
          alt={contactHeader.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container contact-hero-inner">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </div>
        <div className="eyebrow light">{contactHeader.eyebrow}</div>
        <h1>{contactHeader.heading}</h1>
        <p>{contactHeader.description}</p>
      </div>
    </header>
  );
}
