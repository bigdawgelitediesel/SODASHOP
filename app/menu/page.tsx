import type { Metadata } from "next";
import Link from "next/link";
import {
  classicHitGroups, highNotes, coolRhythms, kidsBop, sizes, pricing, kidsPrice, caffeineShot,
  syrupAddIns, extraAddIns, backstage, sweetTreats, fallMenu,
} from "@/lib/data";
import { PageHero, SectionTitle, MenuCard, DrinkRow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Menu",
  description: "Classic Hits mixed sodas, High Notes energy drinks, Cool Rhythms waters, Kid's Bop, the Backstage Pass menu, Sweet Treats, and the Fall Seasonal menu.",
};

const jump = [
  { href: "#classic-hits", label: "Classic Hits" },
  { href: "#high-notes", label: "High Notes" },
  { href: "#cool-rhythms", label: "Cool Rhythms" },
  { href: "#kids-bop", label: "Kid's Bop" },
  { href: "#pricing", label: "Sizes & Prices" },
  { href: "#add-ins", label: "Add-Ins" },
  { href: "#backstage", label: "Backstage Pass" },
  { href: "#sweet-treats", label: "Sweet Treats" },
  { href: "#fall", label: "Fall Seasonal" },
];

export default function MenuPage() {
  return (
    <>
      <PageHero eyebrow="Now playing" title="The Menu" blurb="Every drink is named after a classic hit. Tell us the song, we'll mix the sip." tone="teal" />

      <div className="sticky top-20 z-40 bg-cream border-b-2 border-ink/10">
        <div className="mx-auto max-w-6xl px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          {jump.map((j) => (
            <a key={j.href} href={j.href} className="shrink-0 font-display text-sm px-3 py-1.5 rounded-full bg-white border-2 border-ink hover:bg-yellow transition">{j.label}</a>
          ))}
        </div>
      </div>

      {/* MAIN DRINKS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div id="classic-hits" className="scroll-mt-36">
            <MenuCard title="Classic Hits" sub="Mixed sodas" groups={classicHitGroups} tone="green" />
          </div>
          <div className="flex flex-col gap-8">
            <div id="high-notes" className="scroll-mt-36">
              <MenuCard title="High Notes" sub="Energy drinks" drinks={highNotes} tone="red">
                <p className="bg-pink-soft border-2 border-red rounded-xl px-4 py-3 text-sm">
                  We can substitute sugar-free Red Bull for Ultra White Monster in any High Note.
                </p>
              </MenuCard>
            </div>
            <div id="cool-rhythms" className="scroll-mt-36">
              <MenuCard title="Cool Rhythms" sub="Flavored waters" drinks={coolRhythms} tone="blue" />
            </div>
            <div id="kids-bop" className="scroll-mt-36">
              <MenuCard title="Kid's Bop" sub={`${kidsPrice.size} for ${kidsPrice.price}`} drinks={kidsBop} tone="yellow" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-36 bg-yellow border-y-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle kicker="Pick your size" title="Good, Better, Best" />
          <div className="mt-10 card overflow-hidden max-w-3xl mx-auto">
            <table className="w-full text-center">
              <thead className="bg-ink text-cream font-display">
                <tr>
                  <th className="py-4 px-3 text-left">Drinks</th>
                  {sizes.map((s) => (
                    <th key={s.label} className="py-4 px-3">
                      <span className="block text-lg">{s.label}</span>
                      <span className="block text-xs text-cream/70 font-body">{s.oz}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricing.map((p, i) => (
                  <tr key={p.category} className={i % 2 ? "bg-cream" : "bg-white"}>
                    <td className="py-4 px-3 text-left font-display text-lg">{p.category}</td>
                    {p.prices.map((pr, j) => <td key={j} className="py-4 px-3 font-display text-xl text-red">{pr}</td>)}
                  </tr>
                ))}
                <tr className="bg-cream-2">
                  <td className="py-4 px-3 text-left font-display text-lg">Kid&apos;s Bop</td>
                  <td colSpan={3} className="py-4 px-3 font-display text-xl text-red">{kidsPrice.price} <span className="text-ink/60 text-sm font-body">({kidsPrice.size})</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 max-w-3xl mx-auto bg-pink-soft border-3 border-ink rounded-2xl px-5 py-4 flex flex-wrap items-center justify-between gap-2">
            <span className="font-display text-xl">{caffeineShot.label} <span className="text-ink/60 text-sm font-body">{caffeineShot.detail}</span></span>
            <span className="font-display text-xl text-red">{caffeineShot.price}</span>
          </div>
        </div>
      </section>

      {/* ADD-INS */}
      <section id="add-ins" className="scroll-mt-36 mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Make it yours" title="Add-Ins" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="card p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl">Syrups</h3>
              <span className="pill bg-yellow">{syrupAddIns.price} each</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {syrupAddIns.regular.map((s) => <span key={s} className="rounded-full bg-cream border border-ink/20 px-3 py-1 text-sm">{s}</span>)}
            </div>
            <h4 className="font-display text-lg mt-6">Sugar-free</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {syrupAddIns.sugarFree.map((s) => <span key={s} className="rounded-full bg-teal-soft border border-teal px-3 py-1 text-sm">{s}</span>)}
            </div>
          </div>
          <div className="card p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl">Extras</h3>
              <span className="pill bg-yellow">{extraAddIns.price} each</span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {extraAddIns.groups.map((g) => (
                <div key={g.name}>
                  <h4 className="font-display text-lg">{g.name}</h4>
                  <ul className="mt-1 text-ink/75">
                    {g.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BACKSTAGE PASS */}
      <section id="backstage" className="scroll-mt-36 bg-ink text-cream border-y-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <p className="font-script text-2xl text-yellow">For the regulars</p>
            <h2 className="font-display text-3xl md:text-5xl mt-1">Backstage Pass Menu</h2>
            <p className="mt-4 text-cream/80 max-w-2xl mx-auto">Deep cuts and B-sides. Same sizes and prices as the main menu.</p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1 bg-white text-ink rounded-2xl border-3 border-yellow overflow-hidden">
              <div className="bg-yellow px-5 py-3 border-b-3 border-ink"><h3 className="font-display text-2xl">Classic Hits</h3></div>
              <ul className="px-5 py-2">{backstage.classicHits.map((d) => <DrinkRow key={d.name} d={d} accent="text-ink" />)}</ul>
            </div>
            <div className="lg:col-span-1 bg-white text-ink rounded-2xl border-3 border-red overflow-hidden">
              <div className="bg-red text-white px-5 py-3 border-b-3 border-ink"><h3 className="font-display text-2xl">High Notes</h3></div>
              <ul className="px-5 py-2">{backstage.highNotes.map((d) => <DrinkRow key={d.name} d={d} accent="text-red-2" />)}</ul>
            </div>
            <div className="lg:col-span-1 bg-white text-ink rounded-2xl border-3 border-teal overflow-hidden self-start">
              <div className="bg-teal text-white px-5 py-3 border-b-3 border-ink"><h3 className="font-display text-2xl">Cool Rhythms</h3></div>
              <ul className="px-5 py-2">{backstage.coolRhythms.map((d) => <DrinkRow key={d.name} d={d} accent="text-teal-2" />)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* SWEET TREATS */}
      <section id="sweet-treats" className="scroll-mt-36 mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="It's a little sweeter here" title="Sweet Treats" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sweetTreats.map((t) => (
            <div key={t.name} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl">{t.name}</h3>
                <span className="font-display text-2xl text-red shrink-0">{t.price}<span className="text-sm text-ink/60 font-body"> {t.unit}</span></span>
              </div>
              <p className="text-ink/75 mt-2 flex-1">{t.blurb}</p>
              <h4 className="font-display mt-4">{t.listLabel}</h4>
              <ul className="mt-1 flex flex-wrap gap-2">
                {t.list.map((i) => <li key={i} className="rounded-full bg-cream border border-ink/20 px-3 py-1 text-sm">{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-ink/60 text-sm mt-6">All prices are subject to tax.</p>
      </section>

      {/* FALL SEASONAL */}
      <section id="fall" className="scroll-mt-36 bg-red text-white border-y-4 border-ink">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <p className="font-script text-2xl text-yellow">Sips of the season</p>
            <h2 className="font-display text-3xl md:text-5xl mt-1">{fallMenu.season}</h2>
            <p className="mt-2 text-white/85">{fallMenu.dates}. Prices vary by size.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {fallMenu.drinks.map((d) => (
              <div key={d.name} className="bg-cream text-ink rounded-2xl border-3 border-ink p-6 shadow-[6px_6px_0_#16213a]">
                <span className="pill bg-yellow">{d.tag}</span>
                <h3 className="font-display text-2xl mt-3">{d.name}</h3>
                <p className="text-ink/75 mt-2">{d.mix}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-ink rounded-2xl border-3 border-yellow p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-script text-3xl text-yellow">{fallMenu.warmUps.title}</h3>
              <span className="pill bg-yellow text-ink">{fallMenu.warmUps.size}</span>
            </div>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {fallMenu.warmUps.items.map((w) => (
                <li key={w.name}>
                  <p className="font-display text-lg text-cream">{w.name}</p>
                  <p className="text-cream/75 text-sm">{w.mix}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {fallMenu.treats.map((t) => (
              <span key={t.name} className="bg-cream text-ink border-2 border-ink rounded-full px-4 py-2 font-display">{t.name} <span className="font-body text-ink/70">{t.note}</span></span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 text-center">
        <p className="text-ink/70">Want the printable versions? Download the originals.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {[
            ["/menus/menu-main.png", "Main Menu"],
            ["/menus/menu-backstage.png", "Backstage Pass"],
            ["/menus/menu-sweets.png", "Sweet Treats"],
            ["/menus/menu-fall.png", "Fall Seasonal"],
          ].map(([href, label]) => (
            <a key={href} href={href} target="_blank" rel="noopener" className="font-display text-sm px-4 py-2 rounded-full bg-white border-2 border-ink hover:bg-yellow transition">{label} (PNG)</a>
          ))}
        </div>
        <p className="mt-10"><Link href="/events" className="btn btn-red">Book the Jukebox for Your Event</Link></p>
      </section>
    </>
  );
}
