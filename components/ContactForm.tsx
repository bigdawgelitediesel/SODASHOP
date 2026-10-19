"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/data";

const topics = ["Book an event", "Hidden Hits collaboration", "Menu question", "Something else"];

export default function ContactForm() {
  const params = useSearchParams();
  const eventPkg = params.get("event");
  const presetSubject = params.get("subject");
  const initialTopic = eventPkg ? "Book an event" : presetSubject?.toLowerCase().includes("hidden") ? "Hidden Hits collaboration" : "Book an event";

  const [topic, setTopic] = useState(initialTopic);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState(eventPkg ? `I'm interested in the ${eventPkg} package.` : "");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `${topic} - ${name || "Website inquiry"}`;
    const lines = [`Name: ${name}`, `Email: ${email}`];
    if (phone) lines.push(`Phone: ${phone}`);
    if (date) lines.push(`Event date: ${date}`);
    lines.push("", message);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  const input = "w-full rounded-xl border-2 border-ink/25 bg-white px-4 py-3 focus:outline-none focus:border-ink focus:ring-2 focus:ring-yellow";

  return (
    <form onSubmit={submit} className="mt-6 grid gap-4">
      <div>
        <label className="font-display block mb-2">What is this about?</label>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button type="button" key={t} onClick={() => setTopic(t)}
              className={`rounded-full border-2 border-ink px-4 py-2 font-display text-sm transition ${topic === t ? "bg-ink text-cream" : "bg-white hover:bg-yellow"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-display block mb-1">Name</label>
          <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={input} />
        </div>
        <div>
          <label htmlFor="email" className="font-display block mb-1">Email</label>
          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
        </div>
        <div>
          <label htmlFor="phone" className="font-display block mb-1">Phone <span className="text-ink/50 font-body text-sm">(optional)</span></label>
          <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={input} />
        </div>
        {topic === "Book an event" && (
          <div>
            <label htmlFor="date" className="font-display block mb-1">Event date</label>
            <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className={input} />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="message" className="font-display block mb-1">Message</label>
        <textarea id="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} className={input} placeholder="Tell us about your event, your question, or your idea." />
      </div>
      <button type="submit" className="btn btn-red justify-self-start">Send Message</button>
    </form>
  );
}
