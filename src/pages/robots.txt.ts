import type { APIRoute } from "astro";

// Dev builds set PUBLIC_NOINDEX=true and tell crawlers to stay away.
export const GET: APIRoute = ({ site }) => {
  const off = import.meta.env.PUBLIC_NOINDEX === "true";
  const body = off
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site).href}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
