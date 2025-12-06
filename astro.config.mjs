import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://brunogamb.github.io/BarberiaHeroes/',
  base: '/BarberiaHeroes/',
  integrations: [react()]
});