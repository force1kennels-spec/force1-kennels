import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Force 1 Kennels: Elite K9 & Companion Dogs";
const description = siteConfig.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | Force 1 Kennels",
  },
  description,
  keywords: [
    "K9 dogs",
    "protection dogs",
    "detection dogs",
    "companion dogs",
    "Belgian Malinois",
    "German Shepherd",
    "working dogs India",
    "elite guard dogs",
    "Force 1 Kennels",
  ],
  authors: [{ name: "Force 1 Kennels" }],
  creator: "Force 1 Kennels",
  publisher: "Force 1 Kennels",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Force 1 Kennels",
    title,
    description,
    images: [
      {
        url: "/images/belgian-malinois-in-protection-training-with-handl.jpg",
        width: 1600,
        height: 1064,
        alt: "Belgian Malinois in protection training with handler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/belgian-malinois-in-protection-training-with-handl.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#031425",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: "Force 1 Kennels",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Village Sundraan, PO Mubarikpur, Tehsil Derabassi",
      addressLocality: "SAS Nagar (Mohali)",
      addressRegion: "Punjab",
      postalCode: "140207",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.instagram],
  };

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
