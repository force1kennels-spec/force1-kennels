import type { Metadata } from "next";
import Nav from "@/components/Nav";
import AboutHeader from "@/components/about/AboutHeader";
import AboutPillars from "@/components/about/AboutPillars";
import AboutProcess from "@/components/about/AboutProcess";
import AboutCampusFeature from "@/components/about/AboutCampusFeature";
import AboutClosingCta from "@/components/about/AboutClosingCta";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { siteConfig, aboutHeader } from "@/lib/data";

const title = "About Us";
const description =
  "Over a decade of legacy breeding, raising, and training elite working and companion dogs for defence forces, security professionals, and families.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/about`,
    title: `${title} | Force 1 Kennels`,
    description,
    images: [
      {
        url: aboutHeader.image,
        width: 1774,
        height: 887,
        alt: aboutHeader.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Force 1 Kennels`,
    description,
    images: [aboutHeader.image],
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <AboutHeader />
      <AboutPillars />
      <AboutProcess />
      <AboutCampusFeature />
      <AboutClosingCta />
      <Footer />
      <StickyCta />
    </>
  );
}
