import { RiGithubLine, RiMastodonLine } from "@remixicon/react";
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
          <RiGithubLine name="ri:github-line" size={32} color={"white"} />
        </a>
        <a
          href="https://mstdn.maud.io/@m1sk9"
          target="_blank"
          rel="noreferrer noopener"
        >
          <RiMastodonLine name="ri:mastodon-line" size={32} color={"white"} />
        </a>
      </nav>
    </div>
  );
}
