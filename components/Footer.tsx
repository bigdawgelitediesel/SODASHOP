import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data";
import { Socials } from "./Socials";

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="checker h-6" />
      <div className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <Image src="/img/logo-sticker.webp" alt="" width={120} height={120} className="h-24 w-24 object-contain" />
            <p className="font-script text-2xl mt-4 text-yellow">{site.tagline}</p>
            <p className="mt-3 text-cream/80 max-w-xs">
              Family-owned mobile soda shop serving Rapid City and the Black Hills with handcrafted dirty sodas, waters, energy drinks, and treats.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-yellow mb-4">Find Us</h3>
            <ul className="space-y-2 text-cream/90">
              <li><Link href="/tour" className="hover:text-yellow">This week&apos;s tour dates</Link></li>
              <li><Link href="/menu" className="hover:text-yellow">Full menu</Link></li>
              <li><Link href="/events" className="hover:text-yellow">Event pricing</Link></li>
              <li><Link href="/hidden-hits" className="hover:text-yellow">Hidden Hits treasure hunt</Link></li>
              <li><Link href="/store" className="hover:text-yellow">Merch store</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl text-yellow mb-4">Say Hello</h3>
            <ul className="space-y-2 text-cream/90">
              <li><a href={site.phoneHref} className="hover:text-yellow">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="hover:text-yellow break-all">{site.email}</a></li>
              <li>{site.city}</li>
            </ul>
            <div className="mt-5"><Socials dark /></div>
          </div>
        </div>
        <div className="border-t border-cream/15">
          <div className="mx-auto max-w-6xl px-4 py-5 text-sm text-cream/60 flex flex-col sm:flex-row gap-2 justify-between">
            <span>&copy; {new Date().getFullYear()} The Jukebox Soda Shop. All rights reserved.</span>
            <span>Prices subject to tax. Menu items may change seasonally.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
