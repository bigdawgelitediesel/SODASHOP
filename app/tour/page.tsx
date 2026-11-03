import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { tourWeek } from "@/lib/data";
import { PageHero } from "@/components/ui";
import { Socials } from "@/components/Socials";

export const metadata: Metadata = {
  title: "This Week's Soda Trailer Schedule",
  description: "Where to find The Jukebox Soda Shop dirty soda trailer this week: daily stops, hours, and addresses around Rapid City and the Black Hills.",
  alternates: { canonical: "/tour" },
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
            <li key={`${s.day}-${s.title}`}
                style={s.holiday ? { backgroundColor: s.holiday.bg ?? "#ffd8a8" } : undefined}
                className={`card relative overflow-hidden p-5 md:p-6 grid gap-3 md:grid-cols-[140px_1fr_auto] md:items-center ${s.off ? "bg-cream-2" : ""}`}>
              {s.holiday?.mascot ? (
                <span aria-hidden className="pointer-events-none absolute top-2 right-3 h-16 aspect-[408/560] hidden sm:block">
                  <Image src="/img/jukey-arm-left.webp" alt="" fill sizes="64px" className="jukey-peace" />
                  <Image src="/img/jukey-arm-right.webp" alt="" fill sizes="64px" className="jukey-wave" />
                  <Image src="/img/jukey-body.webp" alt="" fill sizes="64px" />
                </span>
              ) : s.holiday?.decor ? (
                <span aria-hidden className="pointer-events-none absolute -top-1 right-3 text-3xl opacity-80 select-none">{s.holiday.decor}</span>
              ) : null}
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
                {s.holiday?.note && <p className="font-script text-lg text-ink mt-2">{s.holiday.note}</p>}
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
