import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { tourWeek } from "@/lib/data";
import { PageHero } from "@/components/ui";
import { Socials } from "@/components/Socials";

export const metadata: Metadata = {
  title: "Tour Dates",
  description: "Where to find The Jukebox Soda Shop trailer this week in Rapid City and the Black Hills.",
};

function mapsHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address + ", SD")}`;
}

export default function TourPage() {
  return (
    <>
      <PageHero eyebrow="Jukebox on tour" title="This Week's Tour Dates" blurb={tourWeek.range} tone="yellow" />

      <section className="mx-auto max-w-4xl px-4 py-16">
        <ol className="space-y-4">
          {tourWeek.stops.map((s) => (
            <li key={`${s.day}-${s.title}`} className={`card relative overflow-hidden p-5 md:p-6 grid gap-3 md:grid-cols-[140px_1fr_auto] md:items-center ${s.off ? "bg-cream-2" : ""} ${s.holiday ? "!bg-[#ffd8a8]" : ""}`}>
              {s.holiday && (
                <span aria-hidden className="pointer-events-none absolute -top-1 right-3 text-3xl opacity-80 select-none">🦇 👻</span>
              )}
              <div>
                <p className="font-display text-2xl leading-none">{s.day}</p>
                <p className="text-ink/60 mt-1">{s.date}</p>
              </div>
              <div>
                {s.holiday && <span className="pill bg-ink text-[#ff9f43] mb-2">{s.holiday.label}</span>}
                <p className={`font-display text-xl ${s.off ? "text-ink/70" : "text-red"}`}>{s.title}</p>
                {s.address && <p className="text-ink/75">{s.address}</p>}
                {s.time && <p className="font-display mt-1">{s.time}</p>}
                {s.note && <p className="text-ink/75 mt-1">{s.note}</p>}
                {s.holiday && <p className="font-script text-lg text-ink mt-2">{s.holiday.note}</p>}
              </div>
              <div className="md:text-right">
                {s.address ? (
                  <a href={mapsHref(s.address)} target="_blank" rel="noopener" className="btn btn-teal !py-2 !px-4 !text-sm">Directions</a>
                ) : s.note ? (
                  <Link href="/hidden-hits" className="btn btn-yellow !py-2 !px-4 !text-sm">Hidden Hits</Link>
                ) : (
                  <span className="pill bg-ink text-cream">{s.badge ?? "Day off"}</span>
                )}
              </div>
            </li>
          ))}
        </ol>

        {tourWeek.poster && (
          <a href={tourWeek.poster} target="_blank" rel="noopener" className="block mt-12 max-w-xl mx-auto">
            <Image src={tourWeek.poster} alt={`Jukebox tour dates poster, ${tourWeek.range}`} width={1254} height={1254}
                   className="w-full h-auto rounded-2xl border-3 border-ink shadow-[8px_8px_0_#16213a]" />
            <span className="block text-center mt-4 text-sm font-display underline underline-offset-4">View this week&apos;s tour poster full size</span>
          </a>
        )}

        <div className="mt-12 card p-6 md:p-8 text-center bg-teal-soft">
          <p className="font-script text-2xl text-red">Schedule changes fast</p>
          <h2 className="font-display text-2xl md:text-3xl mt-1">New tour dates drop every week on social</h2>
          <p className="text-ink/75 mt-3 max-w-xl mx-auto">Weather, festivals, and private events move us around. Follow along so you never miss a stop.</p>
          <div className="mt-5 flex justify-center"><Socials /></div>
        </div>
      </section>
    </>
  );
}
