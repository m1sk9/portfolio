import Image from 'next/image';

type ProfileLink = {
  title: string;
  id: string;
  href: string;
};

const profileLinks: ProfileLink[] = [
  { title: 'GitHub', id: 'm1sk9', href: 'https://github.com/m1sk9' },
  { title: 'X', id: 'm1s2r8', href: 'https://x.com/m1s2r8' }
];

const Display = ({ title, id, href }: ProfileLink) => (
  <p>
    {title}:{' '}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      {id}
    </a>
  </p>
);

export const About = () => {
  return (
    <div className="flex items-center mt-40">
      <Image
        src={'https://github.com/m1sk9.png'}
        className="mr-4"
        width={100}
        height={100}
        alt="m1sk9's icon"
      />
      <div className="flex flex-col ml-4">
        <p className="text-3xl mb-2">m1sk9</p>
        {profileLinks.map((links, i) => (
          <Display key={i} {...links} />
        ))}
      </div>
    </div>
  );
};
