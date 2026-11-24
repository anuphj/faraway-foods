// Per-page SEO copy in one place. Keep titles under ~60 characters and descriptions under ~155.
// Pages without an entry fall back to the title/description set on the page itself.
export const seo: Record<string, { title?: string; description?: string }> = {
  "/": {
    title: "Authentic pantry staples from the origin",
    description: "Real pantry staples, imported straight from the origin and delivered across India. One country at a time, in limited pre-order drops.",
  },
  "/faq/": {
    title: "Frequently asked questions",
    description: "Answers about Faraway Foods pre-order drops: how pre-ordering works, payment, delivery times, FSSAI compliance and refunds.",
  },
  "/contact/": {
    title: "Contact us",
    description: "Get in touch with Faraway Foods about drops, orders and imports. Email hello@farawayfoods.in.",
  },
  "/drops/": {
    title: "Pantry drops",
    description: "Faraway Foods pantry drops: limited pre-order shipments from one country at a time. See the current drop and what is coming next.",
  },
  "/policies/privacy/": {
    title: "Privacy policy",
    description: "How Faraway Foods collects and uses your email address and other data, and how to opt out.",
  },
};
