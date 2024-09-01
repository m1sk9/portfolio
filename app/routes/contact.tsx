import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <main>
      <div className={styles.heading}>
        <h1>Contact</h1>
        <p>Please use the contact information below.</p>
      </div>

      <section>
        <ul>
          <li>
            Email: <a href="mailto:me@m1sk9.dev">me@m1sk9.dev</a>
            <ul>
              <li>
                This is for incoming messages only, as we do not have a mail
                server. If you need a reply, please use other contact
                information.
              </li>
            </ul>
          </li>
          <li>
            Discord:{" "}
            <a href="https://discord.com/users/586824421470109716">m1sk9</a>{" "}
            (Only for friends)
            <ul>
              <li>
                To prevent spam, I do not receive DMs or friend requests from
                non-friends.
              </li>
              <li>
                If you need to inquire{" "}
                <a href="https://discord.gg/eGUXXPT5Gs">My Discord server</a> to
                contact us.
              </li>
            </ul>
          </li>
          <li>
            Mastodon:{" "}
            <a href="https://mstdn.maud.io/@m1sk9">@m1sk9@mstdn.maud.io</a>
            <ul>
              <li>
                Mention me with <code>Direct</code> in the posting range.
              </li>
              <li>
                I have deleted Twitter. I am fed up with the management and will
                not use it anymore.
              </li>
              <li>
                Note: Mastodon and other major ActicityPub implementations do
                not support end-to-end encryption. Be careful when sending
                sensitive information.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <div>
        <a href="/">← Back</a>
      </div>
    </main>
  );
}
