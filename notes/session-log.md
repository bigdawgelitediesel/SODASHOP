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
- Added The Cake Pop Kitchen logo ("Baked by") to the Cake Pops card on /menu.
- Linked The Cake Pop Kitchen and Sugar & Soul Home Bakery to their Facebook pages from their "Baked by" credits on /menu (`maker.facebook`).
- Apple Tracks blurb now says "homemade caramel".
- Replaced the family photo on Home and About with the new crew-in-front-of-the-trailer photo (`public/img/family-trailer.webp`). Old `photo-1432.webp` is no longer used.
- Added a teal "Hidden Hits" button to the home page hero, next to See the Menu / Tour Dates / Book an Event.
- Home hero background is now a daytime trailer photo (`public/img/trailer-day.webp`), cropped above the old (801) number painted on the trailer. `trailer-night.webp` is still used on About and as the social share image.
- Added "Another One Bites the Apple" to Backstage Pass Cool Rhythms.
- Header logo now has a transparent background (`public/img/logo-clear.webp`) so it blends into the cream nav. The footer (navy) keeps the original white-backed logo, now `public/img/logo-sticker.webp`.
- Moved "Another One Bites the Apple" from Backstage Cool Rhythms to Backstage Classic Hits.
- Backstage Pass drinks now list alphabetically in each section (`byName` in `lib/data.ts`), so new ones land in order automatically.
- Test: added a round top-down photo of "Spice Up Your Life" beside its Fall Seasonal description (`photo` field on `fallMenu.drinks`, image `public/img/spice-up-your-life.webp`).
- Spice Up Your Life photo is now an oval matching the cup rim (`spice-up-your-life-top.webp`).
- Re-cropped the Spice Up Your Life photo to show the front lip of the cup (`spice-up-your-life-rim.webp`).
- Swapped in the owner-cropped Spice Up Your Life photo showing more of the cup (`spice-up-your-life-cup.webp`).
- Spice Up Your Life photo is now a cutout of the cup top with the background removed and the bottom fading out (`spice-up-your-life-cutout.webp`), no frame.
- Added a cutout photo (with lime) to "Oops! I Bit It Again" on the Fall Seasonal menu (`oops-i-bit-it-again-cutout.webp`).
- Added a cutout photo to "Apple Bottom Sips"; all three Fall Seasonal drinks now have photos (`photo` on `fallMenu.drinks`).
- Added Lavender to the syrup add-ins.
- Renamed the Marshmallow syrup to Toasted Marshmallow.
- Syrup add-ins are now listed alphabetically.
- Brews Just Wanna Have Fun and Twist and Sip now say Toasted Marshmallow.
- Tiny Toons blurb now credits Sugar & Soul Home Bakery.
- Reverted the Tiny Toons card blurb; the Sugar & Soul credit now goes in the home page Sweet Treats intro instead.
- Warm Ups priced at $4.50 (16 oz), shown in the Warm Ups pill.
- Tour Oct 22: Founders Park now 9 AM to 4 PM, plus a second Thursday stop at the Stevens vs. Central football game (SD School of Mines, kickoff to end of game). Tour list keys now use day + title so a day can have more than one stop.
- Football game stop now shows 6:00 PM kickoff.
- Added a site-wide pop-up (`announcement` in `lib/data.ts`, `components/Announcement.tsx`) announcing the Thursday Oct 22 changes. Shows once per visitor and stops after 11:59 PM Thursday Mountain time.
- Pop-up now shows on every visit and reload (no longer remembered as closed); still stops at the end of Thursday.
- Football game stop and pop-up now name O'Harra Stadium.
- Tour updated to Oct 26 to Nov 1 (Oyate Tue, private event Wed, Founders Thu/Fri, Fleet Farm Sat, Hidden Hits Sun).
- Removed the outdated "View this week's tour poster" link from /tour.
- Halloween look for the Sat Oct 31 Fleet Farm stop: orange card, "🎃 Halloween" tag, bat/ghost accents, and a "Monster Mash" note (`holiday` field on tour stops); 🎃 on the home tour strip.
