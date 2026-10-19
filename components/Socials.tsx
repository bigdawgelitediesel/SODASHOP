import { site } from "@/lib/data";

const icons = {
  facebook: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden><path d="M16.5 3c.3 2.3 1.7 3.8 4 4v3.1c-1.5 0-2.9-.5-4-1.3v6.4a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.2a2.5 2.5 0 1 0 1.6 2.3V3h3.1z"/></svg>
  ),
};

export function Socials({ dark = false }: { dark?: boolean }) {
  const cls = dark
    ? "bg-cream text-ink hover:bg-yellow"
    : "bg-ink text-cream hover:bg-red";
  const items = [
    { href: site.facebook, label: "Facebook", icon: icons.facebook },
    { href: site.instagram, label: "Instagram", icon: icons.instagram },
    { href: site.tiktok, label: "TikTok", icon: icons.tiktok },
  ];
  return (
    <div className="flex gap-3">
      {items.map((i) => (
        <a key={i.label} href={i.href} target="_blank" rel="noopener" aria-label={i.label}
           className={`h-11 w-11 rounded-full flex items-center justify-center transition ${cls}`}>
          {i.icon}
        </a>
      ))}
    </div>
  );
}
