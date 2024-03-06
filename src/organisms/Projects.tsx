import { Description, Heading } from '@/src/molecules/Recipes';
import { ProfileLink } from '@/src/organisms/Links';
import { css } from '@/styled-system/css';
import Link from 'next/link';

type ProjectTypes = {
  name: string;
  description: string;
  repositoryUrl: string;
};

const projectItems: ProjectTypes[] = [
  {
    name: 'OreOreBot2',
    description: 'A multipurpose Discord Bot that works with Approvers.',
    repositoryUrl: 'https://github.com/approvers/OreOreBot2'
  },
  {
    name: 'babyrite',
    description: 'A citation message Discord bot.',
    repositoryUrl: 'https://github.com/m1sk9/babyrite'
  },
  {
    name: 'ichiyoAI',
    description: 'ChatGPT / Gemini / DALL-E with Discord Bot.',
    repositoryUrl: 'https://github.com/approvers/ichiyoAI'
  },
  {
    name: 'Pulsate',
    description:
      'Easy-to-change, faster, developer friendly next generation decentralized social media.',
    repositoryUrl: 'https://github.com/pulsate-dev/pulsate'
  }
];

export const Display = ({ name, description, repositoryUrl }: ProjectTypes) => {
  return (
    <div
      className={css({ display: 'flex', flexDirection: 'row', gap: '20px' })}
    >
      <Link
        href={repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={css({ color: 'aqua', textDecoration: 'underline' })}
      >
        {name}
      </Link>
      <p>{description}</p>
    </div>
  );
};
export const Projects = () => {
  return (
    <div>
      <p className={Heading({ level: 'h2' })}>Projects</p>
      <div className={Description()}>
        {projectItems.map((items, index) => (
          <Display key={index} {...items} />
        ))}
      </div>
    </div>
  );
};
