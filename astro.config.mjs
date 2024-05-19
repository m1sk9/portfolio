import vercel from '@astrojs/vercel/serverless';
import pandacss from '@pandacss/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [pandacss()]
});
