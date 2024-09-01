import { useEffect, useState } from "react";
import styles from "../styles/lyric_roll.module.css";

interface LyricProps {
  songTitle: string;
  artist: string;
  lyrics: string;
  source: string;
}

export const LyricRoll = () => {
  const [data, setData] = useState<LyricProps>();

  useEffect(() => {
    const fetchLyrics = async () => {
      const res = await fetch("/lyrics.json");
      const data = (await res.json()) as LyricProps[];
      const selected = data[Math.floor(Math.random() * data.length)];
      setData(selected);
    };
    fetchLyrics();
  }, []);

  return (
    <div className={styles.lyrics_box}>
      <p>{data?.lyrics}</p>
      {data?.source ? (
        <a
          href={data?.source}
          target="_blank"
          rel="noreferrer"
          className={styles.lyric_source}
        >
          {data?.songTitle} - {data?.artist}
        </a>
      ) : (
        <p className={styles.lyric_source}>
          {data?.songTitle} - {data?.artist}
        </p>
      )}
    </div>
  );
};
