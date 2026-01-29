import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtas from "@/components/MobileCtas";
import { siteContent } from "@/content/siteContent";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.domain),
  title: "HWK Sanierung | Sanierung, Modernisierung & Schadensanierung",
  description:
    "HWK Sanierung ist Ihr spezialisierter Generalunternehmer für Sanierung, Modernisierung, Revitalisierung sowie Brand- und Wasserschadensanierung – deutschlandweit, strukturiert und zuverlässig.",
  alternates: {
    canonical: siteContent.domain,
  },
  openGraph: {
    title: "HWK Sanierung | Sanierung, Modernisierung & Schadensanierung",
    description:
      "Ganzheitliche Sanierungslösungen, digitales Baumanagement und schlüsselfertige Übergaben – HWK Sanierung.",
    url: siteContent.domain,
    siteName: siteContent.company,
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteContent.company,
    url: siteContent.domain,
    telephone: siteContent.phoneRaw,
    email: siteContent.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.address.line1,
      addressLocality: "Edingen/Neckarhausen",
      postalCode: "68535",
      addressCountry: "DE",
    },
    areaServed: "DE",
    image: `${siteContent.domain}/assets/logo.png`,
  };

  return (
    <html lang="de" className={`${manrope.variable} ${playfair.variable}`}>
      <body className="bg-white font-[var(--font-manrope)] text-slate-900 antialiased">
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <MobileCtas />
      </body>
    </html>
  );
}
