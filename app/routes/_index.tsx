import { LyricRoll } from "~/components/LyricRoll";
import styles from "../styles/index.module.css";

const LINKS = [
  {
    name: "Mastodon",
    id: "@m1sk9@mstdn.maud.io",
    url: "https://mstdn.maud.io/@m1sk9",
  },
  { name: "GitHub", id: "m1sk9", url: "https://github.com/m1sk9" },
  { name: "GitLab", id: "m1sk2", url: "https://gitlab.com/m1sk2" },
  { name: "Steam", id: "m1sk9", url: "https://steamcommunity.com/id/m1sk9/" },
  {
    name: "Spotify",
    id: "Sho Sakuma",
    url: "https://open.spotify.com/user/61fci3294e5for4ohowut77of",
  },
];

export default function IndexPage() {
  return (
    <main>
      <div className={styles.profile}>
        <img
          src="https://github.com/m1sk9.png"
          width={100}
          height={100}
          alt="m1sk9's icon"
        />
        <div>
          <h1>Sho Sakuma / m1sk9</h1>
        </div>
      </div>

      <section>
        <h2>Links</h2>
        <ul>
          {LINKS.map((link) => (
            <li key={link.id}>
              {link.name}:{" "}
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.id}
              </a>
            </li>
          ))}
        </ul>
        <p>
          Please contact us <a href="/contact">here</a> for any inquiry.
        </p>
      </section>

      <section>
        <h2>Activities</h2>
        <ul>
          <li>
            Developer of{" "}
            <a
              href="https://github.com/m1sk9/babyrite"
              target="_blank"
              rel="noreferrer"
            >
              babyrite
            </a>
            , a citation message Discord bot.
          </li>
          <li>
            Co-founder and developer of{" "}
            <a
              href="https://github.com/pulsate-dev/pulsate"
              target="_blank"
              rel="noreferrer"
            >
              Pulsate
            </a>
            , a easy-to-change, faster, developer friendly next generation
            decentralized social media.
          </li>
          <li>
            Administrator of{" "}
            <a href="https://seichi.click" target="_blank" rel="noreferrer">
              GiganticMinecraft.
            </a>
          </li>
        </ul>
      </section>

      <LyricRoll />
    </main>
  );
}
