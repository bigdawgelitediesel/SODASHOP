import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/lib/data";
import { PageHero } from "@/components/ui";
import { Socials } from "@/components/Socials";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Jukebox Soda Shop to book an event, ask about the menu, or collaborate.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Say hello" title="Contact Us" blurb="Questions, bookings, collaborations, or just want to talk soda. Drop us a line and let's make something fizzy happen." tone="red" />

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-10 lg:grid-cols-[1fr_360px] items-start">
        <div className="card p-6 md:p-8">
          <h2 className="font-display text-2xl">Send a message</h2>
          <p className="text-ink/70 mt-1">Fill this out and it opens a ready-to-send email to us. We reply as fast as we can.</p>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>

        <aside className="space-y-6">
          <div className="card p-6 bg-yellow-soft">
            <h3 className="font-display text-xl">Call or text</h3>
            <a href={site.phoneHref} className="font-display text-3xl text-red block mt-1">{site.phone}</a>
            <h3 className="font-display text-xl mt-5">Email</h3>
            <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4 break-all block mt-1">{site.email}</a>
            <h3 className="font-display text-xl mt-5">Home base</h3>
            <p className="mt-1 text-ink/80">{site.city}</p>
            <p className="text-ink/60 text-sm">Serving the Black Hills and western South Dakota</p>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-xl">Follow the trailer</h3>
            <p className="text-ink/70 text-sm mt-1">Tour dates and Hidden Hits drops post here first.</p>
            <div className="mt-4"><Socials /></div>
          </div>
        </aside>
      </section>
    </>
  );
}
