import { defineConfig } from 'astro/config';
import deno from "@astrojs/deno";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [image()]
});