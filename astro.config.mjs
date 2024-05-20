import vercel from '@astrojs/vercel/serverless';
import pandacss from '@pandacss/astro';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    pandacss(),
    icon({
      include: {
        ri: ['github-line', 'mastodon-line', 'bluesky-fill']
      }
    })
  ]
});
