import type { Metadata } from "next";
import { Lilita_One, Pacifico, Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Announcement from "@/components/Announcement";

const display = Lilita_One({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const script = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-script" });
const body = Nunito({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: {
    default: "The Jukebox Soda Shop | Rapid City, SD",
    template: "%s | The Jukebox Soda Shop",
  },
  description:
    "Handcrafted dirty sodas, flavored waters, custom energy drinks, and sweet treats from a family-owned mobile soda shop in Rapid City, South Dakota. Every drink is named after a classic hit.",
  openGraph: {
    title: "The Jukebox Soda Shop",
    description: "It's not just a soda. It's your soundtrack. Rapid City, SD.",
    images: ["/img/trailer-night.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Announcement />
      </body>
    </html>
  );
}
