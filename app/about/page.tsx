import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, SectionTitle } from "@/components/ui";
import { Socials } from "@/components/Socials";

export const metadata: Metadata = {
  title: "About",
  description: "The story of The Jukebox Soda Shop, a family-owned mobile soda shop in Rapid City, South Dakota, inspired by the golden age of rock and roll.",
};

const values = [
  { title: "Handcrafted", body: "Mixed sodas, flavored waters, energy drinks, and specialty beverages made with premium ingredients and a music-inspired twist." },
  { title: "Family owned", body: "Built from the ground up in Rapid City with creativity, quality, and community at the heart of everything we do." },
  { title: "On the move", body: "Our trailer travels Rapid City, the Black Hills, and western South Dakota for festivals, fairs, and private events." },
  { title: "Community first", body: "We collaborate with and promote fellow small businesses. When local supports local, everyone wins." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title="About the Jukebox" blurb="Bringing the fun, flavor, and nostalgia of a classic soda fountain to life, one chart-topping sip at a time." tone="teal" />

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
        <Image src="/img/family-trailer.webp" alt="The Jukebox Soda Shop family in front of the trailer" width={1200} height={1500} className="rounded-2xl border-3 border-ink shadow-[8px_8px_0_#16213a] w-full h-auto" />
        <div className="space-y-4 text-lg text-ink/85">
          <p>
            At The Jukebox Soda Shop, we are all about bringing the fun, flavor, and nostalgia of a classic soda fountain to life. Inspired by the golden age of rock &amp; roll, we created a place where great drinks and good vibes come together.
          </p>
          <p>
            We specialize in handcrafted mixed sodas, often called dirty sodas, along with refreshing flavored waters, custom energy drinks, and specialty beverages. Every drink on our menu is named after a classic hit, turning every order into an experience as memorable as your favorite song.
          </p>
          <p>
            Beyond the drinks, we serve Jukebox Munchies like warm pretzel bites, Apple Tracks, cake pops, and cookies that pair perfectly with your favorite sip.
          </p>
        </div>
      </section>

      <section className="bg-yellow border-y-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle kicker="What we're about" title="The Jukebox Way" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="text-ink/75 mt-2">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-4 text-lg text-ink/85">
          <p className="font-script text-3xl text-red">Thank you, Rapid City</p>
          <p>
            We are incredibly grateful for the support our community has shown us. Thanks to our amazing customers, The Jukebox Soda Shop has been recognized as one of the top-rated food trucks in Rapid City, and we work every day to earn that reputation with exceptional service and unforgettable flavors.
          </p>
          <p>
            Whether you know us for the dirty sodas, the Hidden Hits hunt, or just the smiles we serve with every order, we are honored to be part of your celebrations and everyday moments. Turn up the music, grab your favorite drink, and let us provide the soundtrack to your day.
          </p>
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Link href="/tour" className="btn btn-red">Find the Trailer</Link>
            <Socials />
          </div>
        </div>
        <Image src="/img/trailer-day.webp" alt="The Jukebox Soda Shop trailer with its service window open" width={1800} height={966} className="rounded-2xl border-3 border-ink shadow-[8px_8px_0_#16213a] w-full h-auto" />
      </section>
    </>
  );
}
