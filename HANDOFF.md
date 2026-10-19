# Handoff: The Jukebox Soda Shop website

This is everything you need to take over the site.

## What you are getting

- The full website source code (this repo).
- A live copy at https://jukebox-soda-shop.vercel.app
- `CLAUDE.md` in this folder. Claude Code reads it automatically, so your Claude already knows how the site is built, where every piece of content lives, and how to deploy.

## One-time setup on your computer

1. Install Node.js (LTS) from https://nodejs.org and Git from https://git-scm.com
2. Open a terminal and run:

```
git clone https://github.com/bigdawgelitediesel/SODASHOP.git
cd SODASHOP
npm install
npm run dev
```

3. Open http://localhost:3460 in your browser. That is your local preview.
4. Open Claude Code in the SODASHOP folder. Ask it things like "update the tour dates for next week" or "raise the 44 oz price to $7.25". It will edit, build, and push.

## Hosting

You do not need a Vercel account. The GitHub repo is already connected to Vercel, so every push to `main` rebuilds and publishes the live site automatically within about a minute. Your whole workflow is: edit, `git push`, refresh the site.

When you are ready to retire Squarespace and point `jukeboxsoda.com` at the new site, ask Jacob. That is a one-time domain change in the Vercel dashboard plus a DNS update at wherever the domain is registered.

## Day-to-day

- Weekly tour dates: edit `tourWeek` in `lib/data.ts` (or ask Claude), push, done.
- Menu, prices, events, products, phone, email: all in `lib/data.ts`.
- Photos: drop into `public/img` and reference them from the page files.
- Printable menu PNGs: `public/menus`.

## Things to decide

- The star marker on some drinks: confirm what it means or remove it.
- Online store checkout still runs through the old Squarespace store. Keep that, or set up Stripe/Shopify later.
- The contact form opens an email. A form service can replace it if you want submissions in an inbox or sheet.
