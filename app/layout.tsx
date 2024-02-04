import clsx from 'clsx';
import { Noto_Sans_JP } from 'next/font/google';

import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={clsx(notoSansJP.variable, 'font-sans')}>
      <body>{children}</body>
    </html>
  );
}
