import clsx from 'clsx';
import { Metadata } from 'next';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';
import { Noto_Sans_JP } from 'next/font/google';

import pkg from '../../package.json' assert { type: 'json' };
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
});

const twitterMetadata: Twitter = {
  creator: '@m1s2r8',
  title: pkg.name,
  card: 'summary'
};

export const metadata: Metadata = {
  title: {
    default: pkg.name,
    template: `%s | ${pkg.name}`
  },
  openGraph: {
    title: pkg.name,
    description: "m1sk9's portfolio",
    url: 'https://m1sk9.dev',
    type: 'website',
    locale: 'ja_JP'
  },
  twitter: twitterMetadata,
  description: "m1sk9's portfolio",
  authors: {
    name: 'm1sk9',
    url: 'https://m1sk9.dev'
  },
  generator: 'Next.js',
  keywords: ['m1sk9', 'portfolio'],
  publisher: 'Vercel'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={clsx(notoSansJP.variable, 'font-sans')}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </head>
      <body className=" bg-gray-900">{children}</body>
    </html>
  );
}
