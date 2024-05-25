import pandacss from '@pandacss/astro';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    pandacss(),
    icon({
      include: {
        ri: [
          'home-4-line',
          'github-line',
          'mastodon-line',
          'quill-pen-fill',
          'link'
        ]
      }
    })
  ]
});
