import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://farawayfoods.in",
  output: "static",
  build: { format: "directory" },
});
