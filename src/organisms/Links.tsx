import { css } from '@/styled-system/css';

export type ProfileLink = {
  title: string;
  id: string;
  href: string;
};

export const profileLinks: ProfileLink[] = [
  { title: 'GitHub', id: 'm1sk9', href: 'https://github.com/m1sk9' },
  {
    title: 'Bluesky',
    id: '@m1sk9.dev',
    href: 'https://bsky.app/profile/m1sk9.dev'
  },
  { title: 'Zenn', id: 'm1sk9', href: 'https://zenn.dev/m1sk9' },
  { title: 'X', id: '@m1s2r8', href: 'https://x.com/m1s2r8' }
];

export const Display = ({ title, id, href }: ProfileLink) => {
  return (
    <div>
      <div>
        {title}:{' '}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={css({ color: 'aqua', textDecoration: 'underline' })}
        >
          {id}
        </a>
      </div>
    </div>
  );
};

export const ProfileLink = () => {
  return (
    <div>
      {profileLinks.map((profileLink) => (
        <Display key={profileLink.id} {...profileLink} />
      ))}
    </div>
  );
};
