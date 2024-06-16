import react from '@astrojs/react';
import pandacss from '@pandacss/astro';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://m1sk9.dev',
  redirects: {
    // 2024/06/17: 非公開設定にした一部の記事を GitHub にリダイレクトさせる
    '/blog/about-pulsate-2024-03':
      'https://github.com/m1sk9/portfolio/blob/main/src/content/posts/about-pulsate-2024-03.md',
    '/blog/twitter-the-end':
      'https://github.com/m1sk9/portfolio/blob/main/src/content/posts/twitter-the-end.md',
    '/blog/firefox-shortcut':
      'https://github.com/m1sk9/portfolio/blob/main/src/content/posts/firefox-shortcut.md',
    // 2024/05/30: ブログレイアウトの再デザイン時に Content Collections を使用したため, ルーティングが変更されている. そのため, リダイレクトを設定する.
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
    }),
    react()
  ]
});
