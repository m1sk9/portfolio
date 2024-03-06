import { Description, Heading } from '@/src/molecules/Recipes';
import { css } from '@/styled-system/css';

type TimelineTypes = {
  year: string;
  description: string;
};

const timelineItems: TimelineTypes[] = [
  { year: '2005', description: 'Born in Japan.' },
  {
    year: '2012-2021',
    description: 'Spending elementary and junior high school years.'
  },
  {
    year: '2021-2024',
    description: 'Spending high school years.'
  },
  {
    year: '2023',
    description:
      'Started development of next generation decentralized social media "Pulsate".'
  }
];

const Display = ({ year, description }: TimelineTypes) => (
  <div className={css({ display: 'flex', flexDirection: 'row', gap: '20px' })}>
    <p className={css({ color: 'gray.500' })}>{year}</p>
    <p>{description}</p>
  </div>
);
export const Timeline = () => {
  return (
    <div>
      <p className={Heading({ level: 'h2' })}>Timeline</p>
      <div className={Description()}>
        {timelineItems.map((items, index) => (
          <Display key={index} {...items} />
        ))}
      </div>
    </div>
  );
};
