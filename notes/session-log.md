# SODASHOP session log

## 2026-10-19

- Repo created and cloned to `C:\Users\Parts\Desktop\SODASHOP`.
- Instruction: everything from this chat gets saved and pushed here.
- Project details not yet captured. Next: what the soda shop is, where, and what we are building first.

### Site rebuild (same day)

- Pulled every page of jukeboxsoda.com (Squarespace): home, about, contact, hidden hits, store + 5 product pages. Six menus and the tour poster were image-only, so all drinks, prices, add-ins, event tiers, and tour stops were transcribed into `lib/data.ts`.
- Built a Next.js 16 + Tailwind 4 site with 8 routes: /, /menu, /tour, /events, /hidden-hits, /store, /about, /contact.
- Deployed to Vercel: https://jukebox-soda-shop.vercel.app (project `jukebox-soda-shop`). Deploy with `vercel deploy --prod --yes`.
- Verified desktop (1440) and mobile (390) with headless Chrome: no horizontal overflow on any page.

Open items for Jacob:
- The ✸ marker on the original main menu has no legend. Rendered as a "shop favorite" star; confirm meaning or remove (`star: true` in data.ts).
- Store checkout still runs through Squarespace product pages. To sell directly, add Stripe/Shopify later.
- Contact form is mailto-based. A real form backend (Formspree, Resend) is a small follow-up.
- The trailer photo shows a DoorDash sticker but no listing was found online. Add the link if one exists.
- Custom domain: point jukeboxsoda.com at Vercel when ready to switch off Squarespace.
- Tour dates are hard-coded per week in `tourWeek`. Update weekly, or wire to a Google Sheet later.

### Domain prep (same day)

- Pointed store "Buy Now" links (`site.originalStore`) at the Squarespace built-in domain `pepper-rabbit-3jjr.squarespace.com` so checkout keeps working after jukeboxsoda.com moves to Vercel.
- Plan for the switch: add jukeboxsoda.com + www in Vercel, then in GoDaddy DNS replace the Squarespace A/CNAME records with A @ 76.76.21.21 and CNAME www cname.vercel-dns.com. Leave MX/TXT (email) alone. Then remove the custom domain from Squarespace so the built-in domain stops redirecting.
- Phone number changed to (605) 490-5383 (`site.phone` / `site.phoneHref`).
- Removed the soda-base pills shown beside drink names (`DrinkRow` in `components/ui.tsx`). The `base` field stays in `lib/data.ts` but is no longer displayed.
- Classic Hits on /menu are now grouped by soda family (Mountain Dew, Sprite, Fanta, Dr Pepper, Coke, Root Beer, Lemonade), built automatically from each drink's `base` (`classicHitGroups` in `lib/data.ts`).
- Added Sprite Zero to the Sprite section heading (`extraVariants` in `lib/data.ts`).
- Star meaning confirmed: starred drinks can be made completely sugar free except for purées (natural sugar). Added the note under the drink cards on /menu (`sugarFreeNote`) and changed the star tooltip.
- Starred "Deep in the Gulp of Texas" (sugar-free option).
- Starred "Hydro Twist" (sugar-free option).
- Extras add-ins on /menu now use the same rounded-chip style as Syrups.
- Added plain "Cream" to the Creams extras.
- Renamed the "Fresh" extras heading to "Fresh Fruit".
- Added the Sugar & Soul Home Bakery logo ("Baked by") to the Tiny Toons card on /menu (`maker` on the sweet treat, logo at `public/img/sugar-and-soul-logo.webp`).
