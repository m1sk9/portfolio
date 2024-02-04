type Timeline = {
  year: number;
  description: string;
};

const timelineItems: Timeline[] = [
  { year: 2005, description: 'Born in Japan.' },
  { year: 2012, description: 'Enter elementary school.' },
  { year: 2018, description: 'Enter junior high school.' },
  {
    year: 2021,
    description:
      'Getting started with Minecraft (Bedrock) plugin development in PHP. '
  },
  {
    year: 2021,
    description: 'Entered high school. Became a member of approvers.'
  },
  {
    year: 2022,
    description:
      'Start learning TypeScript / Kotlin / Java. Start believing only in statically typed languages.'
  },
  {
    year: 2022,
    description:
      'Participation in the operation and development of Gigantic (seichi.network)'
  },
  {
    year: 2023,
    description:
      'Enters into an outsourcing agreement with Xtraveler, Inc. Started learning Rust.'
  }
];

const Display = ({ year, description }: Timeline) => (
  <p className="mb-3">
    {year}: {description}
  </p>
);

export const Timeline = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl">Timeline</h1>
      <div className="mt-5">
        {timelineItems.map((timeline, i) => (
          <Display key={i} {...timeline} />
        ))}
      </div>
    </div>
  );
};
