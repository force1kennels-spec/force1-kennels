import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfoPanel from "@/components/contact/ContactInfoPanel";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { siteConfig, contactHeader } from "@/lib/data";

const title = "Contact Us";
const description =
  "Tell us what you need, whether it's an operational working dog, a security placement, or a companion for your home, and a Force 1 Kennels expert will guide you from there.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/contact`,
    title: `${title} | Force 1 Kennels`,
    description,
    images: [
      {
        url: contactHeader.image,
        width: 1600,
        height: 1064,
        alt: contactHeader.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Force 1 Kennels`,
    description,
    images: [contactHeader.image],
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <ContactHeader />
      <section className="contact-section section-pad" id="enquiry">
        <div className="container">
          <div className="contact-grid">
            <ContactInfoPanel />
            <ContactForm />
          </div>
        </div>
      </section>
      <ContactMap />
      <Footer />
      <StickyCta />
    </>
  );
}
