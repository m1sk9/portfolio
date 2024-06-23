import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { LyricRoll } from "./components/molecules/LyricRoll";
import styles from "./styles/root.module.css";

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

export default function App() {
  return (
    <html lang="ja">
      <head>
        <title>m1sk9.dev</title>
        <meta charSet="utf-8" />
        <meta name="description" content="m1sk9's portfolio" />
        <meta name="viewport" content="width=device-width" />

        <meta name="og:title" content="m1" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja" />
        <meta property="og:description" content="m1sk9's portfolio" />
        <meta property="og:site_name" content="m1sk9.dev" />
        <meta property="og:url" content="https://m1sk9.dev" />
        <meta property="og:image" content="https://m1sk9.dev/icon.jpg" />

        <meta name="theme-color" content="#04CDFF" />
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
        <Meta />
        <Links />
      </head>
      <body className={styles.root}>
        <div className={styles.container}>
          <Outlet />
        </div>
        <Scripts />

        <br />
        <LyricRoll />
        <div className={styles.footer}>
          &copy; {new Date().getFullYear()} m1sk9
        </div>
      </body>
    </html>
  );
}
