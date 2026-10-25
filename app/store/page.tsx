import type { Metadata } from "next";
import Image from "next/image";
import { products, site } from "@/lib/data";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Store",
  description: "Jukebox Soda Shop merch: tees, vinyl-record earrings and necklaces, and retro motel keychains.",
};

export default function StorePage() {
  return (
    <>
      <PageHero eyebrow="Wear the soundtrack" title="Jukebox Merch" blurb="Retro pieces for music lovers and soda fans. Prices subject to tax." tone="yellow" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.slug} className="card overflow-hidden flex flex-col">
              <Image src={p.image} alt={p.name} width={900} height={900} className="aspect-square object-cover w-full border-b-3 border-ink" />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-2xl leading-tight">{p.name}</h2>
                  <span className="font-display text-2xl text-red shrink-0">{p.price}</span>
                </div>
                {p.options && <span className="pill bg-cream-2 self-start mt-2">{p.options}</span>}
                <p className="text-ink/75 mt-3 flex-1">{p.blurb}</p>
                <a href={`${site.originalStore}/p/${p.slug}`} target="_blank" rel="noopener" className="btn btn-red mt-5">Buy Now</a>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center text-ink/60 text-sm mt-10">
          Checkout opens in our secure online store. Prefer to shop in person? Everything is available at the trailer.
        </p>
      </section>
    </>
  );
}
