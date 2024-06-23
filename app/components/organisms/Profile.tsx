import {
  RiDiscordFill,
  RiGithubFill,
  RiKey2Line,
  RiMastodonFill,
  RiSpotifyFill,
} from "@remixicon/react";
import styles from "../../styles/components/profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <img src="icon.jpg" width={100} height={100} alt="m1sk9's icon" />
      <h2>Sho Sakuma</h2>

      <nav>
        <a
          href="https://github.com/m1sk9"
          target="_blank"
          rel="noreferrer noopener"
        >
          <RiGithubFill size={32} color={"white"} />
        </a>
        <a
          href="https://mstdn.maud.io/@m1sk9"
          target="_blank"
          rel="noreferrer noopener"
        >
          <RiMastodonFill size={32} color={"white"} />
        </a>
        <a
          href="https://discord.com/users/586824421470109716/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <RiDiscordFill size={32} color={"white"} />
        </a>
        <a
          href="https://open.spotify.com/user/61fci3294e5for4ohowut77of"
          target="_blank"
          rel="noreferrer noopener"
        >
          <RiSpotifyFill size={32} color={"white"} />
        </a>
        <a
          href="pub.asc"
          title="ABB3 904C 7263 155D 9F5C 34A3 198F 1B4D 8D77 678F"
          target="_blank"
          rel="noreferrer noopener"
        >
          <RiKey2Line size={32} color={"white"} />
        </a>
      </nav>
    </div>
  );
}
