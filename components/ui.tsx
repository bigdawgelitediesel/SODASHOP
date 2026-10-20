import type { Drink, DrinkGroup } from "@/lib/data";

export function PageHero({
  eyebrow,
  title,
  blurb,
  tone = "teal",
}: {
  eyebrow?: string;
  title: string;
  blurb?: string;
  tone?: "teal" | "red" | "yellow" | "ink";
}) {
  const bg = { teal: "bg-teal text-white", red: "bg-red text-white", yellow: "bg-yellow text-ink", ink: "bg-ink text-cream" }[tone];
  return (
    <section className={`${bg} border-b-4 border-ink`}>
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 text-center">
        {eyebrow && <p className="font-script text-2xl md:text-3xl opacity-90">{eyebrow}</p>}
        <h1 className="font-display text-4xl md:text-6xl mt-2 drop-shadow-[3px_3px_0_rgba(22,33,58,0.35)]">{title}</h1>
        {blurb && <p className="mt-5 max-w-2xl mx-auto text-lg opacity-95">{blurb}</p>}
      </div>
    </section>
  );
}

export function SectionTitle({ kicker, title, center = true }: { kicker?: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      {kicker && <p className="font-script text-2xl text-red">{kicker}</p>}
      <h2 className="font-display text-3xl md:text-5xl text-ink mt-1">{title}</h2>
    </div>
  );
}

export function Star() {
  return (
    <span title="Can be made sugar free" aria-label="Can be made sugar free" className="inline-block text-yellow drop-shadow-[1px_1px_0_#16213a] ml-1 align-middle">
      <svg viewBox="0 0 24 24" className="h-4 w-4 inline" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.3l7.1-.7z"/></svg>
    </span>
  );
}

export function DrinkRow({ d, accent }: { d: Drink; accent: string }) {
  return (
    <li className="py-3 border-b border-dashed border-ink/15 last:border-0">
      <div className="flex items-start justify-between gap-3">
        <p className={`font-display text-lg leading-tight ${accent}`}>
          {d.name}
          {d.star && <Star />}
        </p>
      </div>
      <p className="text-ink/75 mt-1 text-[15px]">{d.mix}</p>
    </li>
  );
}

export function MenuCard({
  title,
  sub,
  drinks,
  groups,
  tone,
  children,
}: {
  title: string;
  sub: string;
  drinks?: Drink[];
  groups?: DrinkGroup[];
  tone: "green" | "red" | "blue" | "yellow";
  children?: React.ReactNode;
}) {
  const head = {
    green: "bg-teal text-white",
    red: "bg-red text-white",
    blue: "bg-ink text-cream",
    yellow: "bg-yellow text-ink",
  }[tone];
  const accent = { green: "text-teal-2", red: "text-red-2", blue: "text-ink", yellow: "text-ink" }[tone];
  return (
    <div className="card overflow-hidden flex flex-col">
      <div className={`${head} px-5 py-4 border-b-3 border-ink`}>
        <h3 className="font-display text-2xl leading-none">{title}</h3>
        <p className="font-script text-lg opacity-90 mt-1">{sub}</p>
      </div>
      {groups ? (
        <div className="px-5 py-2 flex-1">
          {groups.map((g) => (
            <div key={g.title} className="mt-4 first:mt-2">
              <h4 className="font-display text-xl text-ink border-b-2 border-ink pb-1">
                {g.title}
                {g.variants.length > 1 && (
                  <span className="block font-body font-bold text-sm text-ink/60 mt-0.5">{g.variants.join(" · ")}</span>
                )}
              </h4>
              <ul>{g.drinks.map((d) => <DrinkRow key={d.name} d={d} accent={accent} />)}</ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="px-5 py-2 flex-1">
          {drinks?.map((d) => <DrinkRow key={d.name} d={d} accent={accent} />)}
        </ul>
      )}
      {children && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}
