import { defineConfig } from 'astro/config';

<<<<<<< HEAD
// https://astro.build/config
export default defineConfig({});
=======
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact()]
});
>>>>>>> master
