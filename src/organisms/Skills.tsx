import { Description, Heading } from '@/src/molecules/Recipes';
import { css } from '@/styled-system/css';

type SkillTypes = {
  kind: string;
  skillSet: string;
};

const skillItems: SkillTypes[] = [
  { kind: 'Lang', skillSet: 'TypeScript(JavaScript), Kotlin, Rust' },
  { kind: 'Runtime', skillSet: 'Node.js, Bun, Deno' },
  { kind: 'Editor/IDE', skillSet: 'VSCode, (NeoVim), WebStorm, IntelliJ IDEA' }
];

const Display = ({ kind, skillSet }: SkillTypes) => (
  <div className={css({ display: 'flex', flexDirection: 'row', gap: '20px' })}>
    <p className={css({ color: 'gray.500' })}>{kind}</p>
    <p>{skillSet}</p>
  </div>
);

export const Skills = () => {
  return (
    <div>
      <p className={Heading({ level: 'h2' })}>Skills</p>
      <div className={Description()}>
        {skillItems.map((items, index) => (
          <Display key={index} {...items} />
        ))}
      </div>
    </div>
  );
};
