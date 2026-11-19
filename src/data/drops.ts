// One entry per drop. Adding Drop 002 = adding an object here.
// Prices come from the planning blueprint: confirm before going live.
export type Item = { name: string; size: string; tier1: number; tier2: number; ready: number; photo?: string };
export type Drop = {
  slug: string;
  number: string;
  title: string;
  origin: string;
  status: "planned" | "upcoming" | "open" | "closed" | "in-transit" | "delivered";
  blurb: string;
  items: Item[];
  stage: number | null; // index of the current step (0-5); null = no tracker
  dates?: Record<number, string>; // optional date per step, e.g. { 1: "12 Dec" }
};

export const stagesFor = (d: Drop) => [
  "Pre-orders open",
  "Pre-orders close",
  `Shipped from ${d.origin}`,
  "Customs and FSSAI clearance",
  "Packed in Bengaluru",
  "Dispatched to you",
];
export const stageNotes = [
  "Early pre-order prices apply",
  "Orders are locked in",
  "One consolidated air shipment",
  "Customs and FSSAI checks",
  "Checked and repacked",
  "Tracking link sent to you",
];

export const drops: Drop[] = [
  {
    slug: "001",
    number: "001",
    title: "Japan",
    origin: "Japan",
    status: "upcoming",
    blurb:
      "Our first drop: ceremonial matcha from Uji, barrel-aged soy sauce and vegetarian daifuku mochi, flown in as one consolidated shipment.",
    items: [
      { name: "Uji ceremonial matcha", size: "50 g tin", tier1: 1699, tier2: 1799, ready: 1899, photo: "matcha.jpg" },
      { name: "Barrel-aged soy sauce", size: "300 ml bottle", tier1: 1499, tier2: 1649, ready: 1799, photo: "soy-sauce.jpg" },
      { name: "Vegetarian daifuku mochi", size: "180 g box", tier1: 799, tier2: 899, ready: 999, photo: "mochi.jpg" },
    ],
    stage: 0,
  },
  {
    slug: "002",
    number: "002",
    title: "To be decided",
    origin: "",
    status: "planned",
    blurb: "We pick the next country based on what you ask for. Tell us where we should go.",
    items: [],
    stage: null,
  },
];

export const live = ["upcoming", "open", "closed", "in-transit"];
export const currentDrop = () => drops.find((d) => live.includes(d.status));
export const statusLabel: Record<Drop["status"], string> = {
  planned: "Planned",
  upcoming: "Opening soon",
  open: "Pre-orders open",
  closed: "Pre-orders closed",
  "in-transit": "On its way",
  delivered: "Delivered",
};
export const currentLabel = (d: Drop) =>
  d.stage === 0 ? (d.status === "open" ? "Pre-orders open" : "Opening soon") : stagesFor(d)[d.stage ?? 0];
