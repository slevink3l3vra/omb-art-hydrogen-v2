export type SizeGroup = "180×120" | "150×100" | "100×100";

export type Work = {
  slug: string;
  title: string;
  year: number;
  size: string;
  sizeGroup: SizeGroup;
  technique: string;
  priceHuf: number;
  scent?: string;
  award?: string;
  blurb: string;
  story: string;
  palette: [string, string, string, string];
  composition: Composition;
};

export type Composition =
  | "fire"
  | "mist"
  | "bloom"
  | "mind"
  | "forest"
  | "tide"
  | "cups"
  | "horizon";

export const works: Work[] = [
  {
    slug: "sacred-fire",
    title: "Sacred Fire",
    year: 2025,
    size: "150 × 100 cm",
    sizeGroup: "150×100",
    technique: "Acrylic on canvas",
    priceHuf: 890_000,
    blurb: "A holy fire that burns what no longer serves, so the next era can begin.",
    story:
      "Sacred Fire holds the moment a life is cleared. Embers stack into arches, then fall back into ash-dark ground. What remains is warmth — not destruction for its own sake, but room.",
    palette: ["#1a120e", "#c45a32", "#e7b15a", "#5c2a4a"],
    composition: "fire",
  },
  {
    slug: "the-moment-before-becoming",
    title: "The Moment Before Becoming",
    year: 2025,
    size: "150 × 100 cm",
    sizeGroup: "150×100",
    technique: "Acrylic on canvas",
    priceHuf: 920_000,
    blurb: "Rebirth, still holding its breath. Destruction and creation as one gesture.",
    story:
      "This is the pause after the fire and before the name. Pale weather moves across the canvas; a few decisive strokes refuse to settle. The painting stays unfinished on purpose — becoming is the subject.",
    palette: ["#d7ddd8", "#8fb8b0", "#e27a62", "#f3efe4"],
    composition: "mist",
  },
  {
    slug: "fleurs-de-labsolu",
    title: "Fleurs de l'Absolu",
    year: 2025,
    size: "150 × 100 cm",
    sizeGroup: "150×100",
    technique: "Acrylic on canvas",
    priceHuf: 980_000,
    scent: "A flowering garden after rain — citrus leaf, warm petal, a trace of resin.",
    blurb: "The final chord: renewal arriving as color, and as scent.",
    story:
      "Flowers here are not a still life. They are the sound of the earth after purification — a cacophony that resolves. The work is paired with a fragrance so the room receives it twice: once through the eye, once through the air.",
    palette: ["#f3d2b0", "#e15b3a", "#c43b78", "#f2c14e"],
    composition: "bloom",
  },
  {
    slug: "mind-game",
    title: "Mind Game",
    year: 2018,
    size: "100 × 100 cm",
    sizeGroup: "100×100",
    technique: "Acrylic on canvas",
    priceHuf: 1_200_000,
    award: "Winner, The Abstractum International Art Show 2024 — Golden Duck Gallery",
    blurb: "Know where your place is, and you find your place in consciousness.",
    story:
      "Loops of dark line travel a field of luminous color. The path is not a maze to escape. It is a reminder that orientation is an inner act. Mind Game later received the Abstractum prize; the canvas itself has not changed its mind.",
    palette: ["#12343a", "#e07a5f", "#f2cc8f", "#7b4b8a"],
    composition: "mind",
  },
  {
    slug: "gaia",
    title: "Gaia",
    year: 2024,
    size: "180 × 120 cm",
    sizeGroup: "180×120",
    technique: "Acrylic on canvas",
    priceHuf: 1_450_000,
    scent: "Deep forest after dusk — wet bark, moss, a cool mineral edge.",
    blurb: "The ground remembering itself. Large enough to change the temperature of a room.",
    story:
      "Gaia is built from dark greens and a single pale horizon. It asks for a wall with air around it. The accompanying scent brings the forest indoors without illustrating a landscape — only its pressure and its quiet.",
    palette: ["#0d1410", "#1f4d34", "#c6a15b", "#6d8f62"],
    composition: "forest",
  },
  {
    slug: "blessing-from-neptun",
    title: "Blessing from Neptun",
    year: 2023,
    size: "100 × 100 cm",
    sizeGroup: "100×100",
    technique: "Acrylic on canvas",
    priceHuf: 760_000,
    scent: "Open water — salt, cold air, a warm gold current underneath.",
    blurb: "A current that arrives as blessing, not as weather.",
    story:
      "Blue is the body of the painting; gold is the permission running through it. Neptun, in the artist’s spelling, is less a god than a temperature — the relief of being carried.",
    palette: ["#0e2433", "#3d7ea6", "#d7ece8", "#e2b657"],
    composition: "tide",
  },
  {
    slug: "da-tulips-xvii",
    title: "DA Tulips XVII",
    year: 2024,
    size: "100 × 100 cm",
    sizeGroup: "100×100",
    technique: "Acrylic on canvas",
    priceHuf: 640_000,
    blurb: "Cups of color, not flowers. A series about joy that refuses to be polite.",
    story:
      "The tulip series keeps the silhouette of a bloom and throws away the botany. XVII is the loudest of the recent group: magenta cups, lemon interiors, a ground the color of late ochre.",
    palette: ["#c9842a", "#d63d73", "#f2e15a", "#3d8c86"],
    composition: "cups",
  },
  {
    slug: "green-nature",
    title: "Green Nature",
    year: 2022,
    size: "180 × 120 cm",
    sizeGroup: "180×120",
    technique: "Acrylic on canvas",
    priceHuf: 1_100_000,
    blurb: "Growth without a garden plan. The large canvas as a living wall.",
    story:
      "Vertical strokes rise like stems that never agreed on a species. Green Nature is the most architectural of the large works — it organizes a room the way a window onto trees would, without depicting the trees.",
    palette: ["#243024", "#7d9a45", "#e6d7a2", "#1a2420"],
    composition: "horizon",
  },
];

export const sizeGroups: Array<"All" | SizeGroup> = ["All", "180×120", "150×100", "100×100"];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function formatHuf(value: number) {
  return new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0,
  }).format(value);
}

export type Exhibition = {
  date: string;
  title: string;
  kind: string;
  place: string;
  upcoming?: boolean;
};

export const exhibitions: Exhibition[] = [
  {
    date: "27 June 2026",
    title: "Open Doors",
    kind: "Group exhibition",
    place: "David Art Gallery, Budapest",
    upcoming: true,
  },
  {
    date: "11 June 2026",
    title: "Resident Exhibition Opening",
    kind: "Group exhibition",
    place: "Secret Gallery, Budapest",
    upcoming: true,
  },
  {
    date: "18–20 March 2026",
    title: "CEO 25th Anniversary Meeting",
    kind: "Introductory exhibition",
    place: "LE PRIMORE Hotel, Hévíz",
    upcoming: true,
  },
  {
    date: "15 March 2026",
    title: "2026 Oscar Party",
    kind: "Group exhibition — Secret Gallery",
    place: "Europe Event Center, Budapest",
    upcoming: true,
  },
  {
    date: "6 March 2026",
    title: "Conscious Women's Day",
    kind: "Exhibition — Longevity Magazine",
    place: "ENSANA Thermal Hotel, Budapest",
    upcoming: true,
  },
  {
    date: "18 December 2025",
    title: "Winter Exhibition & Art Fair",
    kind: "Exhibition",
    place: "Secret Gallery, Budapest",
  },
  {
    date: "18 September 2025",
    title: "My Broken Renaissance",
    kind: "Exhibition evening",
    place: "Kincsem Palace, Budapest",
  },
  {
    date: "5 August 2025",
    title: "Traveller's Art Fair",
    kind: "Exhibition",
    place: "Golden Duck Gallery, Budapest",
  },
  {
    date: "24 July 2025",
    title: "ESG Art Summer",
    kind: "Exhibition",
    place: "David Art Gallery, Budapest",
  },
  {
    date: "23 May 2025",
    title: "Elements",
    kind: "Exhibition",
    place: "David Art Gallery, Budapest",
  },
  {
    date: "9 April 2025",
    title: "Primavera",
    kind: "Exhibition",
    place: "OCCO Gallery, Madrid",
  },
  {
    date: "December 2024",
    title: "Winter Glamour",
    kind: "Exhibition & art fair",
    place: "Secret Gallery, Budapest",
  },
  {
    date: "December 2024",
    title: "Weihnachten zum Opernhaus",
    kind: "Exhibition",
    place: "City Gallery, Vienna",
  },
  {
    date: "11 December 2024",
    title: "Forbes Flow All Stars",
    kind: "Exhibition & art fair",
    place: "Corinthia Hotel, Budapest",
  },
];
