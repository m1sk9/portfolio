import { Heading } from '@/src/molecules/Recipes';
import { ProfileLink, profileLinks } from '@/src/organisms/Links';
import { css } from '@/styled-system/css';
import { container } from '@/styled-system/patterns';
import { Metadata } from 'next';
import Link from 'next/link';

const otherLinks: ProfileLink[] = [
  {
    title: 'Discord',
    id: 'm1sk9',
    href: 'https://canary.discord.com/users/586824421470109716/'
  },
  { title: 'Qiita', id: 'm1sk9', href: 'https://qiita.com/m1sk9' },
  { title: 'last.fm', id: 'm1sk9', href: 'https://www.last.fm/user/m1sk9' },
  {
    title: 'GPG Keys',
    id: 'Available on keys.openpgp.org - Key fingerprint: ABB3 904C 7263 155D 9F5C 34A3 198F 1B4D 8D77 678F',
    href: 'https://keys.openpgp.org/vks/v1/by-fingerprint/ABB3904C7263155D9F5C34A3198F1B4D8D77678F'
  },
  {
    title: 'SSH Keys',
    id: 'Available on GitHub',
    href: 'https://github.com/m1sk9.keys'
  },
  {
    title: 'Email (receive only)',
    id: 'me@m1sk9.dev',
    href: 'mailto:me@m1sk9.dev'
  }
];

const fediverseProfileLinks: ProfileLink[] = [
  {
    title: 'Misskey (りんごぱい); メイン',
    id: '@m1sk9@misskey.04.si',
    href: 'https://misskey.04.si/@m1sk9'
  },
  {
    title: 'Misskey (Growthers); サブ',
    id: '@meru@mi.growthers.dev',
    href: 'https://mi.growthers.dev/@meru'
  },
  {
    title: 'Misskey (かせいすきー)',
    id: '@m1sk9@kasei.ski',
    href: 'https://kasei.ski/@m1sk9'
  }
];

export const metadata: Metadata = {
  title: 'Other Links'
};

export default function Links() {
  return (
    <div
      className={container({
        marginX: { base: 15, lg: 40 },
        mt: 20,
        gap: 10
      })}
    >
      <p className={Heading()}>Other Links</p>

      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          mt: 3,
          gap: 2
        })}
      >
        {otherLinks.map((items, index) => (
          <div key={index}>
            {items.title}:{' '}
            <Link
              href={items.href}
              target="_blank"
              rel="noopener noreferrer"
              className={css({ color: 'aqua', textDecoration: 'underline' })}
            >
              {items.id}
            </Link>
          </div>
        ))}

        <div className={css({ mt: 3 })}>
          <p className={Heading({ level: 'h3' })}>Fediverse</p>
          <p>
            現状公開しているアカウントは Misskey のみで，りんごぱい と Growthers
            (知り合いのインスタンス) のアカウントのみです．{' '}
          </p>
          <p>
            かせいすきー
            は上記2つとは別にアカウントを持っていますが普段使いする予定はありません．
          </p>
          <p>
            また Threads は公開アカウントではないため Fediverse
            モードは有効にしていません．フォローバックはできないので注意してください．
          </p>

          {fediverseProfileLinks.map((items, index) => (
            <div key={index}>
              {items.title}:{' '}
              <Link
                href={items.href}
                target="_blank"
                rel="noopener noreferrer"
                className={css({ color: 'aqua', textDecoration: 'underline' })}
              >
                {items.id}
              </Link>
            </div>
          ))}
        </div>

        <Link href={'/'} className={css({ color: 'aqua', mt: 3 })}>
          ← Back
        </Link>
      </div>
    </div>
  );
}
