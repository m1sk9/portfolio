import { css } from '../../styled-system/css';
import { useState, useEffect } from 'react';

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
      const res = await fetch('/data/lyrics.json');
      const data = (await res.json()) as LyricProps[];
      const selected = data[Math.floor(Math.random() * data.length)];
      setLyricData(selected);
    };
    fetchLyrics();
  }, []);

  return (
    <div
      className={css({
        mt: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      })}
    >
      <p className={css({ textStyle: 'caption', fontSize: '15px' })}>
        {lyricData?.lyrics}
      </p>
      <a
        href={lyricData?.source}
        className={css({ textStyle: 'caption', color: 'gray', mt: 2 })}
      >
        {lyricData?.songTitle} - {lyricData?.artist}
      </a>
    </div>
  );
};
