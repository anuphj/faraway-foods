// One entry per drop. Adding Drop 002 = adding an object here.
// Prices come from the planning blueprint: confirm before going live.
export type Stage = { label: string; done: boolean };
export type Drop = {
  slug: string;
  number: string;
  title: string;
  origin: string;
  status: "planned" | "upcoming" | "open" | "closed" | "in-transit" | "delivered";
  blurb: string;
  items: { name: string; size: string; tier1: number; tier2: number; ready: number }[];
  timeline: Stage[];
};

const stages = (doneCount: number): Stage[] =>
  ["Pre-orders open", "Pre-orders close", "Shipped from Japan", "Customs and FSSAI clearance", "Packed in Bengaluru", "Dispatched to you"].map(
    (label, i) => ({ label, done: i < doneCount }),
  );

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
      { name: "Uji ceremonial matcha", size: "50 g tin", tier1: 1699, tier2: 1799, ready: 1899 },
      { name: "Barrel-aged soy sauce", size: "300 ml bottle", tier1: 1499, tier2: 1649, ready: 1799 },
      { name: "Vegetarian daifuku mochi", size: "180 g box", tier1: 799, tier2: 899, ready: 999 },
    ],
    timeline: stages(0),
  },
  {
    slug: "002",
    number: "002",
    title: "To be decided",
    origin: "",
    status: "planned",
    blurb: "We pick the next country based on what you ask for. Tell us where we should go.",
    items: [],
    timeline: [],
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
