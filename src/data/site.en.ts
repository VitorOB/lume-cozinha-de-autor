/**
 * Versão em inglês dos textos de site.ts (mesmo formato).
 * Contatos, endereço e arquivos de imagem vêm da versão em português; aqui só muda o texto.
 */
import { sitePt, type SiteData, type TastingStep } from "./site";

const img = sitePt.images;

const images: SiteData["images"] = {
  hero: { ...img.hero },
  prato1: {
    ...img.prato1,
    alt: "Slices of dry-aged beef beside a potato rosette and chives, on a ceramic plate against a black background, seen from above.",
  },
  prato2: {
    ...img.prato2,
    alt: "Prawns with yellow purée, foam and sprouts in a deep dark ceramic bowl, on a wooden table.",
  },
  prato3: {
    ...img.prato3,
    alt: "Tartlet topped with sliced figs and sugar, with drops of red syrup, seen from above on a black background.",
  },
  chef: {
    ...img.chef,
    alt: "Chef in a black jacket finishing a plate by hand, in the dim light of the kitchen. The face is out of frame.",
  },
  ambiente1: {
    ...img.ambiente1,
    alt: "Dimly lit dining room, with a white-clothed table lit by candles and wall sconces in the background.",
  },
  ambiente2: {
    ...img.ambiente2,
    alt: "Wooden bar counter with a cocktail served, a velvet armchair in the foreground.",
  },
  ambiente3: {
    ...img.ambiente3,
    alt: "Table set with crystal glasses and linen napkins, lit by a single spotlight.",
  },
  ambiente4: {
    ...img.ambiente4,
    alt: "Corner table for two, with glasses, a bottle of wine and a lit candle against the wall.",
  },
  ambiente5: {
    ...img.ambiente5,
    alt: "Cocktail in a coupe glass on the table, lit by a beam of warm light.",
  },
};

const steps: TastingStep[] = [
  { name: "Oyster", ingredients: "tucupi, green apple, cilantro oil" },
  { name: "Pupunha heart of palm", ingredients: "embers, brown butter, Brazil nut" },
  { name: "Prawn", ingredients: "mandioquinha, moqueca foam, sprouts", image: images.prato2 },
  { name: "Pirarucu", ingredients: "cashew beurre blanc, plantain" },
  { name: "Dry-aged beef", ingredients: "jus, potato mille-feuille, chives", image: images.prato1 },
  { name: "Raw-milk cheese", ingredients: "native bee honey, long-fermented bread" },
  { name: "Fig", ingredients: "tartlet, coconut cream, jabuticaba syrup", image: images.prato3 },
];

export const siteEn: SiteData = {
  ...sitePt,

  contact: {
    ...sitePt.contact,
    whatsappMessage: "Hi! I'd like to book a table at Lume. Date: , time: , guests: ",
  },

  creatorMessage: "Hi! I saw the Lume demo website and I'd like a website like this for my restaurant.",

  brand: {
    ...sitePt.brand,
    tagline: "Signature Cuisine",
    description:
      "Signature cuisine with Brazilian ingredients and French technique. A seven-course tasting menu and a short à la carte menu. Dinner, Tuesday to Saturday.",
    cuisine: ["Contemporary", "Brazilian", "French"],
  },

  navigation: [
    { label: "The house", href: "#a-casa" },
    { label: "Menu", href: "#menu" },
    { label: "Chef", href: "#chef" },
    { label: "Ambiance", href: "#ambiente" },
    { label: "Reservations", href: "#reservas" },
  ],

  images,

  hero: {
    ...sitePt.hero,
    label: "Signature cuisine · Dinner only",
    titleLines: ["The essential,", "by the light of the fire."],
    support: "Brazilian ingredients from small producers. French technique.",
    primaryCta: { label: "Book a table", href: "#reservas" },
    secondaryCta: { label: "Explore the menu", href: "#menu" },
    scrollHint: "Scroll",
    pauseLabel: "Pause background video",
    playLabel: "Play background video",
  },

  manifesto: {
    label: "The house",
    before:
      "We cook what the producers harvest each week. The pantry is Brazilian, the technique is French, and the menu follows the ",
    highlight: "season",
    after: ". The rest is fire and patience.",
    signature: "Lume, since the first ember",
  },

  tastingMenu: {
    label: "Tasting menu",
    title: "Seven courses",
    intro: "A sequence designed from the first plate to the last. Served to the whole table.",
    steps,
    pairingLabel: "Pairing",
    pairing: "Optional. A wine chosen for each course, with an alcohol-free version.",
    note: "Let us know about any dietary restrictions when booking.",
    cta: { label: "Book the tasting menu", href: "#reservas" },
  },

  aLaCarte: {
    label: "À la carte",
    title: "A short menu",
    intro: "For those who prefer to choose. A few dishes, made without rushing.",
    groups: [
      {
        name: "Starters",
        items: [
          { name: "Roasted beetroot", detail: "strained yogurt, pecan" },
          { name: "Scallops", detail: "cauliflower, cerrado vanilla" },
          { name: "Free-range chicken terrine", detail: "maxixe pickles" },
        ],
      },
      {
        name: "Mains",
        items: [
          { name: "Catch of the day", detail: "coconut rice, shellfish broth" },
          { name: "Lamb", detail: "yam purée, jabuticaba sauce" },
          { name: "Mushroom rice", detail: "aged cheese, thyme" },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Cacao", detail: "cumaru ice cream, fleur de sel" },
          { name: "Guava", detail: "cheese cream, crunchy nuts" },
          { name: "Cassava", detail: "warm cake, burnt coconut" },
        ],
      },
    ],
    note: "The menu changes with the seasons.",
  },

  chef: {
    ...sitePt.chef,
    label: "The chef",
    bio: [
      "Tomás learned his craft in kitchens in Lyon and Paris. He came back to Brazil to cook close to the people who farm, fish and raise.",
      "At Lume, he works with a small brigade and producers he knows by name. The menu starts in conversation with them.",
    ],
    quote: "A dish is ready when there is nothing left to take away.",
    image: images.chef,
  },

  ambiance: {
    label: "Ambiance",
    title: "Few tables, low light",
    intro: "A dining room for talking without raising your voice. And a bar for arriving early, or staying late.",
    photos: [
      { image: images.ambiente1, caption: "The dining room" },
      { image: images.ambiente2, caption: "The bar" },
      { image: images.ambiente5, caption: "Cocktails" },
      { image: images.ambiente3, caption: "The table" },
      { image: images.ambiente4, caption: "Table for two" },
    ],
  },

  reservations: {
    ...sitePt.reservations,
    label: "Reservations",
    title: "Your table",
    intro: "We serve by reservation only. Write to us with the date, time and number of guests.",
    hoursLabel: "Hours",
    hours: [
      { days: "Tuesday to Saturday", time: "Dinner, 7 pm to 11 pm" },
      { days: "Sunday and Monday", time: "Closed" },
    ],
    policyLabel: "Before you come",
    policy: [
      { term: "Grace period", detail: "15 minutes after your booking time." },
      { term: "Suggested attire", detail: "Smart casual." },
    ],
    whatsappCta: "Book on WhatsApp",
    onlineCta: "Book online",
  },

  demoTag: "demo",

  location: {
    ...sitePt.location,
    label: "Location",
    title: "Find us",
    addressNote: "Fictional address, used only in this demo.",
    mapPlaceholder: "Map unavailable in the demo version",
  },

  social: {
    ...sitePt.social,
    label: "Social",
  },

  footer: {
    creditPrefix: "Demo website",
    creditBy: "created by",
    creditQuestion: "Want a website like this for your restaurant?",
    creditCta: "Talk to me",
    mediaCredit: "Photos and video: Pexels.",
    rights: "Fictional brand and content.",
  },
};
