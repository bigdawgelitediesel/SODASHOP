# The Jukebox Soda Shop website

This repo is the website for The Jukebox Soda Shop, a family-owned mobile dirty-soda trailer in Rapid City, South Dakota. It replaced the old Squarespace site at jukeboxsoda.com.

- Live: https://jukebox-soda-shop.vercel.app
- Stack: Next.js 16 (App Router), Tailwind 4, TypeScript. Fully static, no database, no backend.

## Where things live

- `lib/data.ts` is the single source of truth for ALL content: drinks, prices, add-ins, Backstage Pass, Sweet Treats, Fall Seasonal, event packages, tour dates, store products, phone, email, socials. Most requests ("change a price", "add a drink", "update this week's tour dates") are edits to this file only.
- `app/<route>/page.tsx` are the pages: `/` (home), `/menu`, `/tour`, `/events`, `/hidden-hits`, `/store`, `/about`, `/contact`.
- `components/` holds Nav, Footer, Socials, ContactForm, and shared UI (PageHero, MenuCard, DrinkRow).
- `app/globals.css` has the color tokens and the retro `.card` / `.btn` / `.pill` styles. Keep custom classes inside `@layer components` so Tailwind utilities can override them.
- `public/img` has the logo, trailer photos, and product photos. `public/menus` has the original printable menu PNGs.
- `notes/session-log.md` is the running project log. Append to it when you make meaningful changes.

## Common tasks

**Update weekly tour dates:** edit `tourWeek` in `lib/data.ts` (range + the 7 stops). Keep `off: true` for days off. Then build, commit, push, deploy.

**Add or change a drink:** add to the right array in `lib/data.ts` (`classicHits`, `highNotes`, `coolRhythms`, `kidsBop`, or `backstage.*`). Fields: `name`, `mix`, optional `base` (shown as a pill) and `star` (shows a "shop favorite" star).

**Change prices:** `pricing`, `kidsPrice`, `caffeineShot`, `syrupAddIns.price`, `extraAddIns.price`, `eventTiers`, `eventAddOns`, `eventTerms`.

**Swap the seasonal menu:** edit `fallMenu` (rename it if the season changes and update `app/menu/page.tsx` where it is used).

**Store:** products link to the existing Squarespace checkout (`site.originalStore` + product slug). The site does not take payments itself.

**Contact form:** opens a prefilled email (mailto) to `site.email`. No form backend.

## Build, test, deploy

```
npm install
npm run dev            # local preview at http://localhost:3460
npm run build          # must pass before committing
git add -A && git commit -m "..." && git push
vercel deploy --prod --yes
```

If this Vercel project is connected to GitHub (Settings > Git in the Vercel dashboard), a push to `main` deploys automatically and the `vercel deploy` step is not needed.

Always run `npm run build` before pushing. TypeScript errors fail the build.

## Design rules

- Retro soda-fountain look: cream background, ink navy, red, teal, yellow. Flat colors, thick ink borders, hard offset shadows. No gradients on surfaces, no glossy effects.
- Fonts: Lilita One (display), Pacifico (script accents), Nunito (body), loaded via next/font.
- Every drink name is a song pun. Keep that voice in any new copy.
- Mobile first. Check at 390px wide. No horizontal scroll.
- Keep menus as real text, never images, so they stay searchable and easy to edit.

## Open items

- The original menu marked some drinks with a star symbol with no legend. They are rendered as "shop favorite". Confirm the meaning with the owner or remove `star: true`.
- Custom domain: jukeboxsoda.com still points at Squarespace. Add it in Vercel (Settings > Domains) and update DNS when ready to switch.
- Tour dates are hard-coded weekly. A Google Sheet or simple JSON feed could replace that later.
- A real contact-form backend (Formspree, Resend) would replace the mailto form.
