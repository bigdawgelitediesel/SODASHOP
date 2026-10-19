import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { hiddenHitsDrops } from "@/lib/data";
import { PageHero, SectionTitle } from "@/components/ui";
import { Socials } from "@/components/Socials";

export const metadata: Metadata = {
  title: "Hidden Hits",
  description: "Hidden Hits is a weekly Sunday treasure hunt around Rapid City. Find a hidden Jukebox record, bring it to the trailer, and win a free drink.",
};

const steps = [
  { n: "1", title: "Follow the drops", body: "Every Sunday we hide three Jukebox records somewhere around the Rapid City area and announce each drop on Facebook and Instagram." },
  { n: "2", title: "Go find it", body: "Follow the clues, explore town, and track down the record out in the wild. Gather the family, it's more fun as a team." },
  { n: "3", title: "Call it", body: "Comment on the Hidden Hits post so everyone knows that record has been found." },
  { n: "4", title: "Claim your prize", body: "Bring the record to the trailer for a free Jukebox drink, plus any collaboration prizes attached to that week's hunt." },
];

export default function HiddenHitsPage() {
  return (
    <>
      <PageHero eyebrow="Every Sunday" title="Hidden Hits" blurb="The ultimate Jukebox treasure hunt. The music doesn't just play. Sometimes you have to find it." tone="ink" />

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-10 lg:grid-cols-[1fr_380px] items-start">
        <div>
          <SectionTitle kicker="How it works" title="Four Steps to a Free Drink" center={false} />
          <ol className="mt-8 space-y-5">
            {steps.map((s) => (
              <li key={s.n} className="card p-5 flex gap-5 items-start">
                <span className="h-14 w-14 shrink-0 rounded-full bg-ink text-yellow flex items-center justify-center font-display text-2xl border-3 border-yellow">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="text-ink/75 mt-1">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="card p-6 bg-yellow-soft">
            <h3 className="font-display text-2xl">Sunday Drop Times</h3>
            <ul className="mt-4 space-y-2">
              {hiddenHitsDrops.map((d) => (
                <li key={d.hit} className="flex justify-between bg-white border-2 border-ink rounded-xl px-4 py-3">
                  <span className="font-display">{d.hit}</span>
                  <span className="font-display text-red">{d.time}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink/70 text-sm mt-4">Watch our pages on Sunday for the moment each hit officially drops.</p>
            <div className="mt-4"><Socials /></div>
          </div>
          <Image src="/img/photo-2922.webp" alt="Two smiling finders holding up a Hidden Hits record at the trailer" width={1040} height={1280} className="rounded-2xl border-3 border-ink shadow-[6px_6px_0_#16213a] w-full h-auto" />
        </aside>
      </section>

      <section className="bg-teal text-white border-y-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="font-script text-2xl text-yellow">We love local</p>
            <h2 className="font-display text-3xl md:text-4xl mt-1">Partner businesses make it bigger</h2>
            <p className="mt-4 text-white/90">
              Most weeks, Hidden Hits features a collaboration with another local business. Those drops can include extra prizes, giveaways, or surprises added to the hunt. Hidden Hits is about exploring Rapid City, discovering new places, supporting local, and making memories.
            </p>
          </div>
          <div className="bg-white text-ink rounded-2xl border-3 border-ink p-6 shadow-[6px_6px_0_#16213a]">
            <h3 className="font-display text-2xl">Own a local business?</h3>
            <p className="text-ink/75 mt-2">Collaborate with us on a Hidden Hits week. We will put your brand in front of families all over town.</p>
            <Link href="/contact?subject=Hidden%20Hits%20collaboration" className="btn btn-red mt-5">Let&apos;s Collaborate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
