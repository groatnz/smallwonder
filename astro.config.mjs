import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://smallwonder.nz',
  base: '/',
  build: {
    assets: 'assets',
  },
  preview: {
    host: true,
    port: 4321,
  },
  vite: {
    preview: {
      host: true,
      allowedHosts: [
        '.ngrok-free.app',
        '.ngrok.app',
        '.ngrok.io',
      ],
    },
  },
});

