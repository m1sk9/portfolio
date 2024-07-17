import type { FavoriteProps, LinkProps } from "../types";

import styles from "../styles/style.module.css";

const LinkItems: LinkProps[] = [
  {
    name: "Mastodon",
    id: "@m1sk9@mstdn.maud.io",
    url: "https://mstdn.maud.io/@m1sk9",
  },
  { name: "GitHub", id: "m1sk9", url: "https://github.com/m1sk9" },
  { name: "GitLab", id: "m1sk2", url: "https://gitlab.com/m1sk2" },
  {
    name: "Spotify",
    id: "Sho Sakuma",
    url: "https://open.spotify.com/user/61fci3294e5for4ohowut77of",
  },
];

const FavoriteItems: FavoriteProps[] = [
  { heading: "OS", nesting: ["macOS", "Arch Linux"] },
  { heading: "Browser", nesting: ["Firefox Nightly"] },
  { heading: "Email Client", nesting: ["Thunderbird Daily"] },
  {
    heading: "Editor",
    nesting: ["Visual Studio Code", "Zed", "NeoVim", "(JetBrains IDE)"],
  },
  { heading: "Terminal / Shell", nesting: ["Alacritty / fish"] },
  { heading: "Language", nesting: ["TypeScript", "Rust", "Kotlin"] },
  {
    heading: "Music",
    nesting: [
      "Mrs. Green APPLE",
      "ONE OK ROCK",
      "Survive Said The Prophet",
      "羊文学",
      "緑黄色社会",
      "King Gnu",
      "... And more",
    ],
  },
];

export default function IndexPage() {
  return (
    <main>
      <div className={styles.profile}>
        <img src="icon.jpg" width={100} height={100} alt="m1sk9's icon" />
        <h1>Sho Sakuma</h1>
      </div>

      <section>
        <h2>興味</h2>
        <ul>
          <li>組み込み</li>
          <li>低レイヤ</li>
          <li>AI</li>
        </ul>
      </section>

      <section>
        <h2>リンク</h2>
        <ul>
          {LinkItems.map((i) => (
            <li key={i.id}>
              {i.name}:{" "}
              <a href={i.url} target="_blank" rel="noopener noreferrer">
                {i.id}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>使っているもの / 好きなもの</h2>
        <ul>
          {FavoriteItems.map((i) => (
            <li key={i.heading}>
              {i.heading}
              <ul>
                {i.nesting?.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </li>
          ))}
          <a href="/lyrics.json">ページ最下部の排出歌詞一覧</a>
        </ul>
      </section>

      <section>
        <h2>活動</h2>
        <ul>
          <li>
            Minecraft:
            <ul>
              <li>
                2022/11/19〜:{" "}
                <a href="https://seichi.click">GiganticMinecraft</a>
              </li>
              <li>
                2021/12/03〜2022/11/19:{" "}
                <a href="https://www.azisaba.net/">AzisabaNetwork</a>
              </li>
            </ul>
          </li>
          <li>
            OSS:
            <ul>
              <li>
                2023/09/10〜:{" "}
                <a href="https://link.pulsate.dev/github">Pulsate</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>OpenPGP Key</h2>
        <p>
          fingerpoint:{" "}
          <code>ABB3 904C 7263 155D 9F5C 34A3 198F 1B4D 8D77 678F</code>
        </p>
        <a href="pub.asc">ここから</a>ダウンロードできます.
      </section>
    </main>
  );
}
