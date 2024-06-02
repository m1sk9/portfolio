import vercel from '@astrojs/vercel/serverless';
import pandacss from '@pandacss/astro';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://m1sk9.dev',
  output: 'hybrid',
  adapter: vercel({
    isr: {
      exclude: ['/']
    }
  }),
  // ブログレイアウトの再デザイン時に Content Collections を使用したため, ルーティングが変更されている. そのため, リダイレクトを設定する.
  redirects: {
    '/blog/posts/2024/about-pulsate-2024-03': '/blog/about-pulsate-2024-03',
    '/blog/posts/2024/f*ck-twitter': '/blog/twitter-the-end',
    '/contact': '/links'
  },
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
