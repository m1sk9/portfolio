import { Description, Heading } from '@/src/molecules/Recipes';
import { css } from '@/styled-system/css';

type AboutType = {
  title: string;
  description: string;
};

function calculateAge(birthday: Date) {
  let age = new Date().getFullYear() - birthday.getFullYear();
  const month = new Date().getMonth() - birthday.getMonth();
  if (month < 0 || (month === 0 && new Date().getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}

const aboutDetails: AboutType[] = [
  { title: 'Name', description: 'Sho Sakuma' },
  {
    title: 'Birthday',
    description: `2005/09/02 (${calculateAge(new Date('2005-09-02'))} years old)`
  },
  { title: 'Hobby', description: 'Darts, Fashion' },
  { title: 'Interests', description: 'AI, low-level programming' }
];

const Display = ({ title, description }: AboutType) => {
  const birthday = new Date('2005-09-02');
  const month = new Date().getMonth() - birthday.getMonth();
  let age = new Date().getFullYear() - birthday.getFullYear();
  if (month < 0 || (month === 0 && new Date().getDate() < birthday.getDate())) {
    age--;
  }

  return (
    <div
      className={css({ display: 'flex', flexDirection: 'row', gap: '20px' })}
    >
      <p className={css({ color: 'gray.500' })}>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export const About = () => {
  return (
    <div>
      <p className={Heading({ level: 'h2' })}>About Me</p>
      <div className={Description()}>
        <p>
          I&apos;m a web developer / software developer while attending a
          university in Japan.
        </p>
        {aboutDetails.map((items, index) => (
          <Display key={index} {...items} />
        ))}
      </div>
    </div>
  );
};
