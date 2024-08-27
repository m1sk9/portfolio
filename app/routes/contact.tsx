import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <main>
      <div className={styles.heading}>
        <h1>Contact</h1>
        <p>御用のある方は以下の連絡先をご利用ください</p>
      </div>

      <section>
        <ul>
          <li>
            メール: <a href="mailto:me@m1sk9.dev">me@m1sk9.dev</a>
            <ul>
              <li>
                メールサーバがないので受信専用です.
                返信が必要な場合はそれ以外の連絡先からお願いします.
              </li>
            </ul>
          </li>
          <li>
            Discord:{" "}
            <a href="https://discord.com/users/586824421470109716">m1sk9</a>{" "}
            (フレンドのみ)
            <ul>
              <li>
                スパム防止のためフレンド以外からDM /
                フレンド依頼は受信していません.
              </li>
              <li>
                問い合わせが必要な場合は{" "}
                <a href="https://discord.gg/eGUXXPT5Gs">私のDiscord鯖</a>{" "}
                から問い合わせてください.
              </li>
            </ul>
          </li>
          <li>
            Mastodon:{" "}
            <a href="https://mstdn.maud.io/@m1sk9">@m1sk9@mstdn.maud.io</a>
            <ul>
              <li>
                投稿範囲を <code>Direct</code> にして私をメンションしてください.
              </li>
              <li>
                <div style={{ color: "yellow" }}>
                  注意: Mastodon を始めとする主要の ActicityPub 実装は
                  End-to-end 暗号化をサポートしていません.
                  機密情報の送信には注意してください.
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h3>ギガンティック☆整地鯖のプレイヤーへ</h3>
        <p>
          これらの連絡先に対してサーバーに関するお問い合わせをしないでください.{" "}
        </p>
      </section>
    </main>
  );
}
