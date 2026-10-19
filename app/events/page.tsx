import type { Metadata } from "next";
import Link from "next/link";
import { eventTiers, eventAddOns, eventDiscounts, eventTerms, site } from "@/lib/data";
import { PageHero, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book an Event",
  description: "Event pricing for The Jukebox Soda Shop mobile soda bar: small parties, major events, corporate, weddings, schools, and fundraisers in Rapid City and the Black Hills.",
};

const occasions = ["Weddings", "Corporate events", "Employee appreciation", "School functions", "Fundraisers", "Birthday parties", "Festivals & fairs", "Community celebrations"];

export default function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Bring the trailer to you" title="Event Pricing" blurb="A one-of-a-kind mobile soda bar your guests will talk about. Pick a package, drop a deposit, and we handle the rest." tone="red" />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {eventTiers.map((t) => (
            <div key={t.name} className={`card p-7 flex flex-col ${t.featured ? "bg-yellow-soft md:-translate-y-3" : ""}`}>
              {t.featured ? <span className="pill bg-red text-white self-start">Most popular</span> : <span className="h-6" />}
              <h2 className="font-script text-3xl mt-2">{t.name}</h2>
              <p className="font-display text-6xl text-red mt-2">{t.price}</p>
              <ul className="mt-5 space-y-2 text-ink/80 flex-1">
                <li className="flex gap-2"><Check /> {t.guests}</li>
                <li className="flex gap-2"><Check /> {t.drinks}</li>
                <li className="flex gap-2"><Check /> {t.hours}</li>
                <li className="flex gap-2"><Check /> {t.menu}</li>
              </ul>
              <Link href={`/contact?event=${encodeURIComponent(t.name)}`} className={`btn mt-6 ${t.featured ? "btn-red" : "btn-white"}`}>Book {t.name}</Link>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="font-display text-2xl">Add-Ons</h3>
            <ul className="mt-4 divide-y divide-dashed divide-ink/15">
              {eventAddOns.map((a) => (
                <li key={a.label} className="py-2 flex justify-between gap-3">
                  <span className="text-ink/80">{a.label}</span>
                  <span className="font-display text-red shrink-0">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-2xl">Discounts</h3>
            <p className="text-ink/70 text-sm mt-1">Ask about discounted pricing for:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {eventDiscounts.map((d) => <li key={d} className="rounded-full bg-teal-soft border border-teal px-3 py-1 font-display">{d}</li>)}
            </ul>
          </div>
          <div className="card p-6 bg-ink text-cream">
            <h3 className="font-display text-2xl text-yellow">Deposit</h3>
            <p className="font-display text-5xl mt-2">{eventTerms.deposit}</p>
            <p className="text-cream/80 mt-3 text-sm">{eventTerms.depositNote}</p>
            <p className="text-cream/80 mt-3 text-sm border-t border-cream/20 pt-3">{eventTerms.travel}</p>
          </div>
        </div>
      </section>

      <section className="bg-teal-soft border-y-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle kicker="Any occasion" title="Guests of All Ages Love It" />
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {occasions.map((o) => <li key={o} className="bg-white border-2 border-ink rounded-full px-4 py-2 font-display">{o}</li>)}
          </ul>
          <p className="text-center text-ink/75 mt-8 max-w-2xl mx-auto">
            Our trailer serves Rapid City, the Black Hills, and western South Dakota. Every package includes the Classic Hits and Cool Rhythms menus. Want High Notes energy drinks or sweet treats at your event? Just ask.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="font-script text-3xl text-red">Ready to book?</p>
        <h2 className="font-display text-3xl md:text-5xl mt-1">Lock in your date</h2>
        <p className="text-ink/70 mt-3">Call, email, or send the form and we will get right back to you.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn btn-red">Request a Booking</Link>
          <a href={site.phoneHref} className="btn btn-yellow">{site.phone}</a>
        </div>
        <a href="/menus/event-pricing.png" target="_blank" rel="noopener" className="inline-block mt-8 text-sm font-display underline underline-offset-4">Download the event pricing sheet</a>
      </section>
    </>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
