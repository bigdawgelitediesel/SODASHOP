import Link from "next/link";
import Image from "next/image";
import { classicHits, highNotes, coolRhythms, tourWeek, sweetTreats, eventTiers, products, site } from "@/lib/data";
import { SectionTitle, Star } from "@/components/ui";
import { Socials } from "@/components/Socials";

const categories = [
  { title: "Classic Hits", sub: "Mixed sodas", tone: "bg-teal text-white", drinks: classicHits.filter((d) => d.star).slice(0, 3), from: "from $5.95" },
  { title: "High Notes", sub: "Energy drinks", tone: "bg-red text-white", drinks: highNotes.filter((d) => d.star).slice(0, 3).concat(highNotes.slice(0, 1)).slice(0, 3), from: "from $7.95" },
  { title: "Cool Rhythms", sub: "Flavored waters", tone: "bg-ink text-cream", drinks: coolRhythms.filter((d) => d.star).slice(0, 3), from: "from $5.95" },
];

export default function Home() {
  const openStops = tourWeek.stops.filter((s) => !s.off);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-cream overflow-hidden border-b-4 border-ink">
        <Image
          src="/img/trailer-day.webp"
          alt="The Jukebox Soda Shop trailer with its service window open"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16 text-center">
          <h1 className="leading-none">
            <span className="block font-logo-sans text-2xl md:text-4xl tracking-[0.15em] text-cream">THE</span>
            <span className="block font-logo text-7xl md:text-[7rem] lg:text-[9.25rem] text-cream tracking-wide [-webkit-text-stroke:2px_#e23b3f] [paint-order:stroke_fill] drop-shadow-[4px_4px_0_#e23b3f] mt-1">JUKEBOX</span>
            <span className="block font-logo-sans text-3xl md:text-5xl lg:text-6xl tracking-[0.08em] text-cream mt-2">SODA SHOP</span>
          </h1>
          <p className="font-script text-2xl md:text-4xl text-yellow mt-6">
            It&apos;s not just a soda. It&apos;s your soundtrack.
          </p>
          <p className="mt-2 font-display text-sm md:text-base tracking-[0.2em] uppercase text-cream/80">Rapid City, South Dakota</p>
          <p className="mt-6 text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Handcrafted dirty sodas, flavored waters, custom energy drinks, and sweet treats, every one named after a classic hit. Find the trailer this week or book us for your next event.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/menu" className="btn btn-yellow">See the Menu</Link>
            <Link href="/tour" className="btn btn-red">This Week&apos;s Tour Dates</Link>
            <Link href="/events" className="btn btn-white">Book an Event</Link>
            <Link href="/hidden-hits" className="btn btn-teal">Hidden Hits</Link>
          </div>
        </div>
      </section>

      {/* TOUR STRIP */}
      <section className="bg-yellow border-b-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row md:items-center gap-4">
          <div className="shrink-0">
            <p className="font-display text-2xl leading-none">On Tour This Week</p>
            <p className="text-ink/70 text-sm mt-1">{tourWeek.range}</p>
          </div>
          <div className="flex-1 flex flex-wrap gap-2">
            {openStops.map((s) => (
              <Link key={`${s.day}-${s.title}`} href="/tour" className="bg-white border-2 border-ink rounded-xl px-3 py-2 text-sm hover:bg-cream transition">
                <span className="font-display">{s.day.slice(0, 3)}</span> &middot; {s.title}{s.holiday && <span aria-hidden> 🎃</span>}
                <span className="block text-ink/60 text-xs">{s.time}</span>
              </Link>
            ))}
          </div>
          <Link href="/tour" className="font-display text-ink underline underline-offset-4 shrink-0">Full schedule</Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle kicker="Now playing" title="Three Ways to Sip" />
        <p className="text-center text-ink/70 mt-3 max-w-2xl mx-auto">
          Pick your base, pick your hit. Every drink comes in Good (24 oz), Better (32 oz), or Best (44 oz).
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="card overflow-hidden flex flex-col">
              <div className={`${c.tone} px-5 py-4 border-b-3 border-ink`}>
                <h3 className="font-display text-2xl leading-none">{c.title}</h3>
                <p className="font-script text-lg opacity-90 mt-1">{c.sub}</p>
              </div>
              <ul className="px-5 py-3 flex-1">
                {c.drinks.map((d) => (
                  <li key={d.name} className="py-3 border-b border-dashed border-ink/15 last:border-0">
                    <p className="font-display text-lg leading-tight">{d.name}{d.star && <Star />}</p>
                    <p className="text-ink/70 text-sm mt-1">{d.mix}</p>
                  </li>
                ))}
              </ul>
              <div className="px-5 pb-5 flex items-center justify-between">
                <span className="pill bg-cream-2">{c.from}</span>
                <Link href="/menu" className="font-display text-red hover:underline underline-offset-4">Full list</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SWEET TREATS */}
      <section className="bg-teal-soft border-y-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <SectionTitle kicker="It's a little sweeter here" title="Sweet Treats" center={false} />
            <p className="mt-4 text-ink/75 text-lg">
              Cake pops from The Cake Pop Kitchen, our loaded Apple Tracks, and Tiny Toons cookies from Sugar &amp; Soul Home Bakery. Good drinks, great treats, better vibes.
            </p>
            <Link href="/menu#sweet-treats" className="btn btn-teal mt-7">See Treats &amp; Toppings</Link>
          </div>
          <ul className="space-y-3">
            {sweetTreats.map((t) => (
              <li key={t.name} className="flex items-baseline justify-between gap-4 bg-white border-2 border-ink rounded-xl px-4 py-3">
                <span className="font-display text-xl">{t.name}</span>
                <span className="font-display text-red text-xl">{t.price}{t.unit ? ` ${t.unit}` : ""}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EVENTS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle kicker="Bring the trailer to you" title="Book the Jukebox" />
        <p className="text-center text-ink/70 mt-3 max-w-2xl mx-auto">
          Weddings, corporate events, school functions, fundraisers, birthdays. A mobile soda bar that guests of every age line up for.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {eventTiers.map((t) => (
            <div key={t.name} className={`card p-6 text-center ${t.featured ? "bg-yellow-soft" : ""}`}>
              {t.featured && <span className="pill bg-red text-white">Most popular</span>}
              <h3 className="font-script text-3xl text-ink mt-2">{t.name}</h3>
              <p className="font-display text-5xl text-red mt-2">{t.price}</p>
              <p className="text-ink/70 mt-2">{t.guests} &middot; {t.hours}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/events" className="btn btn-red">Event Pricing &amp; Booking</Link>
        </div>
      </section>

      {/* HIDDEN HITS */}
      <section className="bg-ink text-cream border-y-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative max-w-md mx-auto w-full">
            <div className="vinyl absolute -top-8 -right-4 h-28 w-28 spin-slow hidden md:block" />
            <Image src="/img/photo-2922.webp" alt="Happy customers holding a found Hidden Hit record in front of the Jukebox trailer" width={1040} height={1280} className="rounded-2xl border-3 border-cream shadow-[8px_8px_0_#f8c740] w-full h-auto" />
          </div>
          <div>
            <p className="font-script text-2xl text-yellow">Every Sunday</p>
            <h2 className="font-display text-3xl md:text-5xl mt-1">Hidden Hits Treasure Hunt</h2>
            <p className="mt-4 text-cream/85 text-lg max-w-2xl">
              Three Jukebox records hidden around Rapid City every Sunday at 5, 6, and 7 PM. Find one, bring it to the window, and your drink is on us, plus whatever our partner business of the week adds to the pot.
            </p>
            <Link href="/hidden-hits" className="btn btn-yellow mt-7">How It Works</Link>
          </div>
        </div>
      </section>

      {/* STORE */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle kicker="Wear the soundtrack" title="Jukebox Merch" />
        <div className="mt-10 grid gap-5 grid-cols-2 md:grid-cols-5">
          {products.map((p) => (
            <Link key={p.slug} href="/store" className="card-soft overflow-hidden hover:-translate-y-1 transition bg-white">
              <Image src={p.image} alt={p.name} width={600} height={600} className="aspect-square object-cover w-full" />
              <div className="p-3">
                <p className="font-display leading-tight">{p.name}</p>
                <p className="text-red font-display">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/store" className="btn btn-white">Shop the Store</Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-pink-soft border-y-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
          <Image src="/img/family-trailer.webp" alt="The Jukebox Soda Shop family in their red, yellow, and blue shirts in front of the trailer" width={1200} height={1500} className="rounded-2xl border-3 border-ink shadow-[8px_8px_0_#16213a] w-full h-auto" />
          <div>
            <SectionTitle kicker="Family owned" title="Meet the Jukebox" center={false} />
            <p className="mt-4 text-ink/80 text-lg">
              We built The Jukebox Soda Shop from the ground up in Rapid City, inspired by the golden age of rock &amp; roll. Our trailer travels the Black Hills bringing handcrafted drinks and a whole lot of fun to festivals, fairs, and private events. Thanks to our customers, we have been recognized as one of the top-rated food trucks in Rapid City.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <Link href="/about" className="btn btn-red">Our Story</Link>
              <Socials />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-6xl px-4 pt-20 text-center">
        <p className="font-script text-3xl text-red">Let&apos;s make something fizzy happen</p>
        <h2 className="font-display text-3xl md:text-5xl mt-1">Questions? Collabs? Say hi.</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={site.phoneHref} className="btn btn-yellow">{site.phone}</a>
          <Link href="/contact" className="btn btn-white">Send a Message</Link>
        </div>
      </section>
    </>
  );
}
