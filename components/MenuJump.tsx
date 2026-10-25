"use client";

import { useEffect, useRef, useState } from "react";

// Sticky section bar on /menu. Highlights the section in view and keeps its button visible.
export default function MenuJump({ links }: { links: { href: string; label: string }[] }) {
  const [active, setActive] = useState(links[0]?.href);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      let current = links[0]?.href;
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 160) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  useEffect(() => {
    const btn = bar.current?.querySelector<HTMLElement>(`[data-href="${active}"]`);
    const box = bar.current;
    if (btn && box) box.scrollTo({ left: btn.offsetLeft - box.clientWidth / 2 + btn.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <div className="sticky top-20 z-40 bg-cream border-b-2 border-ink/10">
      <div ref={bar} className="relative mx-auto max-w-6xl px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
        {links.map((j) => (
          <a
            key={j.href}
            href={j.href}
            data-href={j.href}
            aria-current={active === j.href ? "true" : undefined}
            className={`shrink-0 font-display text-sm px-3 py-1.5 rounded-full border-2 border-ink transition ${
              active === j.href ? "bg-ink text-cream" : "bg-white hover:bg-yellow"
            }`}
          >
            {j.label}
          </a>
        ))}
      </div>
    </div>
  );
}
