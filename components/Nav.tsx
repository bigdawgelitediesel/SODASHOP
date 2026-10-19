"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/tour", label: "Tour Dates" },
  { href: "/events", label: "Book an Event" },
  { href: "/hidden-hits", label: "Hidden Hits" },
  { href: "/store", label: "Store" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b-4 border-ink">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/img/logo.webp" alt="The Jukebox Soda Shop" width={64} height={64} className="h-14 w-14 object-contain" priority />
          <span className="font-display text-xl leading-tight text-ink hidden sm:block">
            The Jukebox<br /><span className="text-red">Soda Shop</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = path === l.href || (l.href !== "/" && path.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-display text-base px-3 py-2 rounded-full transition ${active ? "bg-ink text-cream" : "text-ink hover:bg-yellow"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/events" className="btn btn-red ml-3 !py-2 !px-5 !text-base">Book Us</Link>
        </nav>

        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 w-12 h-12 rounded-full border-3 border-ink bg-yellow items-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-6 bg-ink transition ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t-4 border-ink bg-cream px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-display text-lg px-4 py-3 rounded-xl ${path.startsWith(l.href) ? "bg-ink text-cream" : "text-ink hover:bg-yellow"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/events" onClick={() => setOpen(false)} className="btn btn-red mt-2">Book Us for an Event</Link>
        </nav>
      )}
    </header>
  );
}
