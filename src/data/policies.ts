// Only policies with live: true are published and linked. Review before flipping a flag.
export const policies = [
  { slug: "privacy", title: "Privacy policy", draft: false, live: true, body: [
    "Gourmet Food Trader LLP, runs Faraway Foods (this website). This page explains what we collect and why. Last updated 22 November 2026.",
    "Today we collect only your email address, when you join our waitlist. We also record that you agreed to hear from us, the time, and which page you signed up on.",
    "We use it to tell you when a drop opens and to send updates about Faraway Foods. We write to you only because you opted in, and you can opt out at any time by writing to us.",
    "When pre-orders open we will also collect your name, phone number and delivery address to fulfil orders. We will update this page before we do.",
    "Sign-ups are stored with Amazon Web Services, which may hold data outside India. We do not sell your data, and we share it only with providers we need to run the service.",
    "To see, correct or delete your data, or to stop emails, write to hello@farawayfoods.in." ] },
  { slug: "terms", title: "Terms of sale", draft: true, live: false, body: [
    "Faraway Foods is operated by Gourmet Food Trader LLP,. Products are sold through time-limited pre-order drops.",
    "A pre-order is confirmed when we receive your deposit or full payment. Tier prices apply to the tier open when you pay.",
    "Delivery timelines are estimates and depend on shipping, customs and FSSAI clearance." ] },
  { slug: "shipping", title: "Shipping policy", draft: true, live: false, body: [
    "Orders ship after the drop's goods clear customs and are repacked, typically three to four weeks after pre-orders close.",
    "You receive a tracking link when your order is dispatched. Shipping charges, if any, are shown before payment." ] },
  { slug: "refunds", title: "Refund and cancellation policy", draft: true, live: false, body: [
    "You can cancel before pre-orders close for a full refund of what you paid.",
    "If a drop is delayed beyond our stated window, or goods are rejected or cannot be delivered, you can choose a full refund.",
    "Damaged or incorrect items: write to us within 48 hours of delivery with photos and we will replace or refund.",
    "Refunds go back to the original payment method." ] },
];
