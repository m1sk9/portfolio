type Project = {
  name: string;
  description: string;
  repositoryUrl: string;
  isActive: boolean;
};

const projects: Project[] = [
  {
    name: 'OreOreBot2 (approvers)',
    description: 'A multipurpose Discord Bot that works with Approvers.',
    repositoryUrl: 'https://github.com/approvers/OreOreBot2',
    isActive: true
  },
  {
    name: 'babyrite (m1sk9)',
    description: 'A citation message Discord bot.',
    repositoryUrl: 'https://github.com/m1sk9/babyrite',
    isActive: true
  },
  {
    name: 'ichiyoAI (approvers)',
    description: 'ChatGPT / Gemini / DALL-E with Discord Bot.',
    repositoryUrl: 'https://github.com/approvers/ichiyoAI',
    isActive: true
  },
  {
    name: 'Pulsate (pulsate-dev)',
    description:
      'Easy-to-change, faster, developer friendly next generation decentralized social media.',
    repositoryUrl: 'https://github.com/pulsate-dev/pulsate',
    isActive: true
  }
];

const Display = ({ name, description, repositoryUrl, isActive }: Project) => (
  <p className="mt-3">
    <a
      className="underline"
      href={repositoryUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
    : {description} {isActive ? '' : '(Not Active)'}
  </p>
);

export const Project = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl">Project</h1>
      <div className="mt-5">
        {projects.map((project, i) => (
          <Display key={i} {...project} />
        ))}
      </div>
    </div>
  );
};
