import type { Metadata } from "next";
import { Lilita_One, Pacifico, Nunito, Bree_Serif, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Announcement from "@/components/Announcement";
import { site, siteUrl } from "@/lib/data";

const display = Lilita_One({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const script = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-script" });
const body = Nunito({ subsets: ["latin"], variable: "--font-body" });
// Match the lettering in the logo, used for the business name on the home page
const logo = Bree_Serif({ weight: "400", subsets: ["latin"], variable: "--font-logo" });
const logoSans = Poppins({ weight: "800", subsets: ["latin"], variable: "--font-logo-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Jukebox Soda Shop | Dirty Sodas in Rapid City, SD",
    template: "%s | The Jukebox Soda Shop",
  },
  description:
    "Family-owned mobile dirty soda shop in Rapid City, SD. Handcrafted sodas, energy drinks, flavored waters, and treats, each named after a classic hit.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "The Jukebox Soda Shop",
    title: "The Jukebox Soda Shop",
    description: "It's not just a soda. It's your soundtrack. Rapid City, SD.",
    images: [{ url: "/img/og-trailer.jpg", width: 1200, height: 630, alt: "The Jukebox Soda Shop trailer" }],
  },
};

// Business details for Google (local search, knowledge panel)
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: site.name,
  description: "Family-owned mobile dirty soda trailer serving handcrafted sodas, energy drinks, flavored waters, and sweet treats.",
  url: siteUrl,
  logo: `${siteUrl}/img/logo-sticker.webp`,
  image: `${siteUrl}/img/og-trailer.jpg`,
  telephone: "+1-605-490-5383",
  email: site.email,
  servesCuisine: ["Dirty soda", "Specialty drinks", "Desserts"],
  priceRange: "$",
  address: { "@type": "PostalAddress", addressLocality: "Rapid City", addressRegion: "SD", addressCountry: "US" },
  areaServed: [
    { "@type": "City", name: "Rapid City, SD" },
    { "@type": "Place", name: "Black Hills, South Dakota" },
  ],
  sameAs: [site.facebook, site.instagram, site.tiktok],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${body.variable} ${logo.variable} ${logoSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Announcement />
      </body>
    </html>
  );
}
