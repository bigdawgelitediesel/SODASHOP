"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { announcement } from "@/lib/data";

export default function Announcement() {
  const [open, setOpen] = useState(false);

  // Shows on every visit and reload until it expires; closing only hides it for this page view.
  useEffect(() => {
    if (announcement && Date.now() < Date.parse(announcement.expires)) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function close() {
    setOpen(false);
  }

  if (!open || !announcement) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 px-4" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="announcement-title"
        className="card relative w-full max-w-md p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 h-9 w-9 rounded-full border-3 border-ink bg-yellow font-display text-lg leading-none hover:bg-red hover:text-white transition"
        >
          ×
        </button>
        <p className="font-script text-2xl text-red">{announcement.kicker}</p>
        <h2 id="announcement-title" className="font-display text-2xl md:text-3xl mt-1 pr-8">{announcement.title}</h2>
        <ul className="mt-5 space-y-3">
          {announcement.lines.map((l) => (
            <li key={l.label} className="bg-cream border-2 border-ink rounded-xl px-4 py-3">
              <p className="font-display text-lg text-teal-2">{l.label}</p>
              <p className="text-ink/80">{l.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={announcement.link.href} onClick={close} className="btn btn-red">{announcement.link.label}</Link>
          <button onClick={close} className="btn btn-white">Got it</button>
        </div>
      </div>
    </div>
  );
}
