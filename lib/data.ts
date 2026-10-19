export const site = {
  name: "The Jukebox Soda Shop",
  tagline: "It's not just a soda. It's your soundtrack.",
  city: "Rapid City, South Dakota",
  phone: "(801) 367-7169",
  phoneHref: "tel:+18013677169",
  email: "jukeboxsodashop@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61572962648824",
  instagram: "https://www.instagram.com/jukeboxsodashop/",
  tiktok: "https://www.tiktok.com/@jukeboxsodashop",
  originalStore: "https://pepper-rabbit-3jjr.squarespace.com/store",
};

export type Drink = { name: string; mix: string; base?: string; star?: boolean };

export const classicHits: Drink[] = [
  { name: "Another Sip in the Wall", base: "Mountain Dew", mix: "Mountain Dew + Passion Fruit + Strawberry Puree + Orange" },
  { name: "Every Little Sip She Does Is Magic", base: "Diet Mountain Dew", mix: "Mountain Dew + Pomegranate + Grapefruit + Fresh Lime" },
  { name: "Look What You Made Me Dew", base: "Mountain Dew", mix: "Mountain Dew + Blue Raspberry + Coconut", star: true },
  { name: "Born to Slurp Wild", base: "Mountain Dew", mix: "Mountain Dew + Mango Puree + Strawberry", star: true },
  { name: "Sippin' on a Sweet Dream", base: "Mountain Dew", mix: "Mountain Dew + Mango + Watermelon + Coconut Cream + Passion Fruit Popping Pearls" },
  { name: "Dew You Believe in Magic", base: "Mountain Dew", mix: "Mountain Dew + Pineapple + Fresh Lime + Raspberry Puree + Coconut Cream", star: true },
  { name: "Ocean Ice", base: "Sprite", mix: "Sprite + Coconut + Blue Raspberry", star: true },
  { name: "Drink by the Ocean", base: "Sprite", mix: "Sprite + Peach + Strawberry + Vanilla Cream + Peach Popping Pearls" },
  { name: "Oh, Ricky, You're So Fine", base: "Sprite", mix: "Sprite + Fresh Limes + Pomegranate + Cherry", star: true },
  { name: "Life Is But a Cream", base: "Fanta", mix: "Fanta Orange + Vanilla + Cream" },
  { name: "I Wanna Pop with Somebody", base: "Fanta", mix: "Fanta Orange + Strawberry + Strawberry Popping Pearls + Vanilla Cream" },
  { name: "Total Eclipse of the Pop", base: "Dr Pepper", mix: "Dr Pepper + Vanilla + Strawberry Puree + Coconut Cream" },
  { name: "Deep in the Gulp of Texas", base: "Dr Pepper Zero", mix: "Dr Pepper + Vanilla + Coconut Cream" },
  { name: "Cream Berry Rhapsody", base: "Dr Pepper", mix: "Dr Pepper + Raspberry + Vanilla Cream" },
  { name: "Twist You Like a Hurricane", base: "Dr Pepper", mix: "Dr Pepper + Cheesecake + Cherry + Vanilla Cream" },
  { name: "Pour Some Cola on Me", base: "Coke", mix: "Coke + Coconut + Fresh Lime" },
  { name: "Fizzy Like Sunday Morning", base: "Diet Coke", mix: "Coke + Cranberry + Fresh Lime" },
  { name: "Sippin' in the Rain", base: "Coke Zero", mix: "Coke + Pineapple + Peach Puree + Fresh Lime + Coconut Cream", star: true },
  { name: "Good Island Vibrations", base: "Coke", mix: "Coke + Pineapple + Coconut Cream", star: true },
  { name: "Brews Just Wanna Have Fun", base: "Root Beer", mix: "Root Beer + Butterscotch + Marshmallow + Vanilla Cream" },
  { name: "Sippin with My Crew", base: "Root Beer", mix: "Root Beer + Coconut + Vanilla Cream" },
  { name: "Strawberry Sips Forever", base: "Lemonade", mix: "Lemonade + Mango + Strawberry + Fresh Lime + Coconut" },
  { name: "Purple Reign", base: "Lemonade", mix: "Lemonade + Lavender + Vanilla" },
];

export const highNotes: Drink[] = [
  { name: "Hit Me with Your Best Pop", mix: "White Ultra Monster + Mountain Dew + Orange + Passionfruit + Strawberry + Coconut Cream" },
  { name: "Drink Me Up Before You Go Go", mix: "White Ultra Monster + Sprite + Pineapple + Grapefruit + Mango Puree + Coconut Cream" },
  { name: "Lime All Shook Up", mix: "White Ultra Monster + Mountain Dew + Blackberry + Coconut + Fresh Lime + Vanilla Cream" },
  { name: "Blue Suede Chill", mix: "White Ultra Monster + Sprite + Blue Raspberry + Peach + Vanilla Cream", star: true },
  { name: "Jukebox Soldier", mix: "White Ultra Monster + Mountain Dew + Blue Raspberry + Peach + Vanilla Cream", star: true },
  { name: "Orange Creme Fever", mix: "White Ultra Monster + Fanta Orange + Vanilla + Cream" },
];

export const coolRhythms: Drink[] = [
  { name: "Mango in the USA", mix: "Water + Sugar-Free Coconut + Sugar-Free Vanilla + Mango Puree + Coconut Cream", star: true },
  { name: "Here Comes the Breeze", mix: "Water + Sugar-Free Coconut + Sugar-Free Vanilla + Strawberry Puree + Coconut Cream", star: true },
  { name: "Good Hydrations", mix: "Soda Water + Pomegranate + Passion Fruit + Watermelon + Grapefruit" },
  { name: "Bridge Over Chilled Water", mix: "Water + Sugar-Free Vanilla + Sugar-Free Peach + Sugar-Free Pineapple + Fresh Lime + Raspberry Puree", star: true },
  { name: "Hydro Twist", mix: "Soda Water + Pomegranate + Raspberry Puree + Fresh Lime + Coconut Cream" },
];

export const kidsBop: Drink[] = [
  { name: "Twist and Sip", base: "Root Beer", mix: "Root Beer + Marshmallow + Vanilla Cream + Gummy" },
  { name: "Fruit Soda, Yummy Yummy", base: "Sprite", mix: "Sprite + Lemonade + Strawberry + Gummy" },
  { name: "Baby Shark Fizz", base: "Sprite", mix: "Sprite + Lemonade + Blue Raspberry + Gummy" },
  { name: "Hokie Pokie", base: "Fanta", mix: "Fanta Orange + Vanilla + Gummy" },
];

export const sizes = [
  { label: "Good", oz: "24 oz" },
  { label: "Better", oz: "32 oz" },
  { label: "Best", oz: "44 oz" },
];

export const pricing = [
  { category: "Classic Hits & Cool Rhythms", prices: ["$5.95", "$6.55", "$6.95"] },
  { category: "High Notes", prices: ["$7.95", "$8.55", "$8.95"] },
];

export const kidsPrice = { size: "16 oz", price: "$5.50" };
export const caffeineShot = { label: "Caffeine shots", detail: "100 mg per shot", price: "$1.50 each" };

export const syrupAddIns = {
  price: "$0.50",
  regular: ["Blackberry", "Blue Raspberry", "Butterscotch", "Cheesecake", "Cherry", "Coconut", "Cranberry", "Guava", "Green Apple", "Red Grapefruit", "Mango", "Marshmallow", "Orange", "Passion Fruit", "Peach", "Pineapple", "Pomegranate", "Raspberry", "Strawberry", "Vanilla", "Watermelon"],
  sugarFree: ["Blue Raspberry", "Cherry", "Coconut", "Peach", "Pineapple", "Pomegranate", "Raspberry", "Strawberry", "Vanilla"],
};

export const extraAddIns = {
  price: "$0.75",
  groups: [
    { name: "Popping Pearls", items: ["Peach", "Passion Fruit", "Strawberry", "Coconut"] },
    { name: "Purees", items: ["Mango", "Peach", "Raspberry", "Strawberry"] },
    { name: "Creams", items: ["Vanilla Cream", "Coconut Cream"] },
    { name: "Fresh", items: ["Fresh Lime"] },
    { name: "Gummy Candies", items: ["Shark", "Frog", "Butterfly"] },
  ],
};

export const backstage = {
  classicHits: [
    { name: "Doctor, Doctor Gimme the Brews", mix: "Dr Pepper + Toasted Marshmallow + Butterscotch + Vanilla Cream" },
    { name: "Sweet Cream Alabama", mix: "Coke + Cheesecake + Cherry + Vanilla Cream" },
    { name: "Cherry Dreams", mix: "Sprite + Cherry + Vanilla + Coconut Cream" },
    { name: "Blue Monday", mix: "Diet Coke + Peppermint + Blue Raspberry + Vanilla Cream" },
    { name: "Oh, Cherry", mix: "Diet Coke + Cherry + Vanilla" },
    { name: "Chunky Monkey (Remembering Anikah)", mix: "Dr Pepper + Pineapple + Strawberry Puree + Vanilla Cream" },
    { name: "Can't Stop the Dark Side", mix: "Coke + Guava + Fresh Lime + Coconut Cream" },
    { name: "Bring Me to the Beach", mix: "Lemonade + Sugar-Free Coconut + Sugar-Free Vanilla + Mango Puree + Coconut Cream" },
    { name: "Sweet Lightning", mix: "Diet Mountain Dew + Sugar-Free Blue Raspberry + Sugar-Free Pineapple + Fresh Lime x2" },
    { name: "Purple Reign", mix: "Lemonade + Lavender + Vanilla" },
    { name: "Man in Blackberry", mix: "Root Beer + Orange + Blackberry + Vanilla Cream" },
    { name: "Sweet Land of Sip-erty", mix: "Sprite + Mango + Peach + Coconut Cream" },
  ] as Drink[],
  highNotes: [
    { name: "Sweet Lemonade O' Mine", mix: "Ultra White Monster + Lemonade + Raspberry Puree + Vanilla + Coconut Cream" },
    { name: "Livin' La Vida Mango", mix: "Ultra White Monster + Sprite + Watermelon + Mango + Coconut" },
    { name: "Pocket Full of Citrus", mix: "Ultra White Monster + Mountain Dew + Pineapple + Orange" },
    { name: "Drink Me Amadeus", mix: "Ultra White Monster + Sprite + Cherry + Strawberry + Vanilla Cream" },
    { name: "Can You Feel the Force Tonight", mix: "Ultra White Monster + Mountain Dew + Guava + Strawberry + Coconut Popping Pearls" },
    { name: "Red, White, and Bubbly", mix: "Ultra White Monster + Sprite + Blue Raspberry + Coconut + Strawberry" },
    { name: "Electric Paradise", mix: "Ultra White Monster + Fanta Orange + Pineapple + Raspberry + Coconut Cream" },
  ] as Drink[],
  coolRhythms: [
    { name: "Steal My Sunshine Splash", mix: "Water + Guava + Pineapple + Coconut" },
  ] as Drink[],
};

export const sweetTreats = [
  {
    name: "Cake Pops",
    price: "$3.50",
    unit: "each",
    blurb: "Delicious bites from The Cake Pop Kitchen.",
    listLabel: "Flavors",
    list: ["Dirty Dr Pepper", "Oreo Dirt Pie", "Cookies and Cream", "Birthday Cake", "Fudge Brownie"],
  },
  {
    name: "Apple Tracks",
    price: "$8",
    unit: "",
    blurb: "Fresh apples, sweet toppings. Choose a red or green apple with caramel and one topping included. Additional toppings $0.50 each.",
    listLabel: "Toppings",
    list: ["Mini Chocolate Chips", "Mini M&Ms", "Heath Pieces", "Crushed Oreos", "Mini Marshmallows"],
  },
  {
    name: "Tiny Toons",
    price: "$5",
    unit: "",
    blurb: "Big cookies. Big smiles. Ask about our current seasonal flavor.",
    listLabel: "Flavors",
    list: ["Chocolate Chip", "Seasonal Flavor"],
  },
];

export const fallMenu = {
  season: "Fall Seasonal Menu",
  dates: "October through December 2026",
  drinks: [
    { tag: "Classic Hit", name: "Spice Up Your Life", mix: "Dr Pepper + Cinnamon Vanilla + Pumpkin Spice + Cream" },
    { tag: "Cool Rhythm", name: "Apple Bottom Sips", mix: "Water + Green Apple + Raspberry + Mango Puree + Vanilla Cream" },
    { tag: "High Note", name: "Oops! I Bit It Again", mix: "Ultra White Monster + Sprite + Mountain Dew + Green Apple + Watermelon + Fresh Lime" },
  ],
  warmUps: {
    title: "Warm Ups / Hot Chocolates",
    size: "16 oz",
    items: [
      { name: "Pumpkin Spice Baby", mix: "Pumpkin spice, white chocolate, and caramel" },
      { name: "Hazelnuts Roasting on an Open Fire", mix: "Hazelnut, white chocolate, and caramel" },
      { name: "Cinna Bell Rock", mix: "Cinnamon vanilla and caramel" },
      { name: "Rockin' Around the Peppermint Tree", mix: "Peppermint, coconut, vanilla, and cream" },
      { name: "Butterscotch Wonderland", mix: "Toasted marshmallow, butterscotch, and cream" },
    ],
  },
  treats: [
    { name: "Apple Tracks", note: "Green apple edition" },
    { name: "Tiny Toons", note: "Pumpkin White Chocolate Chip" },
  ],
};

export const eventTiers = [
  { name: "Small Party", price: "$300", guests: "50 guests", drinks: "50 drinks (24 oz)", hours: "2 hours", menu: "Classic Hits / Cool Rhythms menu", featured: false },
  { name: "Major Events", price: "$550", guests: "100 guests", drinks: "100 drinks (24 oz)", hours: "2 to 4 hours", menu: "Classic Hits / Cool Rhythms menu", featured: true },
  { name: "Corporate", price: "$1,000", guests: "200 guests", drinks: "200 drinks (24 oz)", hours: "4 to 6 hours", menu: "Classic Hits / Cool Rhythms menu", featured: false },
];

export const eventAddOns = [
  { label: "Additional 25 guests", price: "$150" },
  { label: "Additional 50 guests", price: "$300" },
  { label: "Additional 100 guests", price: "$550" },
  { label: "Extra hour", price: "$50" },
  { label: "Wedding package", price: "Ask us" },
];

export const eventDiscounts = ["Military", "Schools", "First Responders", "Churches"];

export const eventTerms = {
  deposit: "$100",
  depositNote: "A non-refundable deposit is due to schedule the event. The remainder is due 7 days before the event.",
  travel: "A $50 charge is added to events further than 20 miles from Rapid City.",
};

export type TourStop = {
  day: string;
  date: string;
  title: string;
  address?: string;
  time?: string;
  off?: boolean;
  note?: string;
};

export const tourWeek = {
  range: "October 19 to October 25, 2026",
  stops: [
    { day: "Monday", date: "Oct 19", title: "Rehearsing for the upcoming tour dates", off: true },
    { day: "Tuesday", date: "Oct 20", title: "Oyate Health Center", address: "3200 Canyon Lake Dr, Rapid City", time: "7:00 AM to 2:00 PM" },
    { day: "Wednesday", date: "Oct 21", title: "Founders Park", address: "1510 W Omaha St, Rapid City", time: "9:00 AM to 5:30 PM" },
    { day: "Thursday", date: "Oct 22", title: "Founders Park", address: "1510 W Omaha St, Rapid City", time: "9:00 AM to 5:30 PM" },
    { day: "Friday", date: "Oct 23", title: "Founders Park", address: "1510 W Omaha St, Rapid City", time: "9:00 AM to 5:30 PM" },
    { day: "Saturday", date: "Oct 24", title: "Old MacDonald's Farm", address: "23691 Busted Five Ct, Rapid City", time: "10:00 AM to 5:00 PM" },
    { day: "Sunday", date: "Oct 25", title: "Resting between sets", off: true, note: "Hidden Hits with House of Thread. Drops at 5:00, 6:00, and 7:00 PM." },
  ] as TourStop[],
};

export const products = [
  { slug: "the-echo-vase-cxgb9", name: "The Jukebox T-Shirt", price: "$25.00", image: "/img/prod-tshirt.webp", options: "Sizes S to 2XL", blurb: "Ultra-soft tee with the classic front logo and a bold retro back design." },
  { slug: "the-ember-vessel-wha2j", name: "Jukebox Stud Earrings", price: "$16.00", image: "/img/prod-stud-earrings.webp", options: "", blurb: "Retro vinyl-record studs. Lightweight, fun, and full of personality." },
  { slug: "the-horizon-vase-e4jf3", name: "Jukebox Necklace", price: "$16.00", image: "/img/prod-necklace.webp", options: "Gold or Silver", blurb: "A playful vinyl-record pendant, delicate enough for every day." },
  { slug: "the-solace-vessel-99nyz", name: "Jukebox Dangle Earrings", price: "$22.00", image: "/img/prod-dangle-earrings.webp", options: "Gold or Silver", blurb: "Eye-catching vinyl-record dangles with a pop of vintage charm." },
  { slug: "jukebox-retro-motel-keychains", name: "Retro Motel Keychains", price: "$8.00", image: "/img/prod-keychains.webp", options: "Teal or Yellow", blurb: "Colorful motel-style keychains with our signature jukebox logo." },
];

export const hiddenHitsDrops = [
  { hit: "Hit #1", time: "5:00 PM" },
  { hit: "Hit #2", time: "6:00 PM" },
  { hit: "Hit #3", time: "7:00 PM" },
];
