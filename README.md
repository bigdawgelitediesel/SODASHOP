# SODASHOP

Rebuild of jukeboxsoda.com (The Jukebox Soda Shop, Rapid City SD) as a Next.js site on Vercel.

- Live: https://jukebox-soda-shop.vercel.app
- Original site (Squarespace): https://www.jukeboxsoda.com
- Repo: https://github.com/bigdawgelitediesel/SODASHOP

## Stack

Next.js 16 (App Router) + Tailwind 4 + TypeScript. Fully static, no backend.

## Edit the content

Everything text-based lives in one file: `lib/data.ts`.

- Drinks and prices (Classic Hits, High Notes, Cool Rhythms, Kid's Bop, add-ins)
- Backstage Pass menu, Sweet Treats, Fall Seasonal
- Event packages, add-ons, discounts, deposit terms
- Weekly tour dates (`tourWeek`)
- Store products (link to the Squarespace checkout pages)
- Phone, email, socials

Page files are in `app/<route>/page.tsx`. Shared pieces are in `components/`.

## Run locally

    npm install
    npm run dev        # http://localhost:3460

## Deploy

    npm run build
    git add -A && git commit -m "..." && git push
    vercel deploy --prod --yes

## Notes

- Images in `public/img` are the originals pulled from the Squarespace CDN (WebP).
- `public/menus` holds the original printable menu PNGs, linked from the Menu, Tour, and Events pages.
- The store does not process payments. "Buy Now" opens the matching product on the existing Squarespace store so checkout keeps working.
- The contact form opens a prefilled email (mailto). Swap in a form service later if wanted.
- `notes/session-log.md` is the running project log.
