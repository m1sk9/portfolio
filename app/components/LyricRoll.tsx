import { useEffect, useState } from "react";
import styles from "../styles/lyric_roll.module.css";

interface LyricProps {
  songTitle: string;
  artist: string;
  lyrics: string;
  source: string;
}

export const LyricRoll = () => {
  const [lyricData, setLyricData] = useState<LyricProps>();

  useEffect(() => {
    const fetchLyrics = async () => {
      const res = await fetch("/lyrics.json");
      const data = (await res.json()) as LyricProps[];
      const selected = data[Math.floor(Math.random() * data.length)];
      setLyricData(selected);
    };
    fetchLyrics();
  }, []);

  return (
    <div className={styles.lyric}>
      <p>{lyricData?.lyrics}</p>
      <div className={styles.lyric_source}>
        {lyricData?.source ? (
          <a
            href={lyricData?.source}
            target="_blank"
            rel="noreferrer"
            className={styles.lyric_source}
          >
            {lyricData?.songTitle} - {lyricData?.artist}
          </a>
        ) : (
          <p className={styles.lyric_source}>
            {lyricData?.songTitle} - {lyricData?.artist}
          </p>
        )}
      </div>
    </div>
  );
};
