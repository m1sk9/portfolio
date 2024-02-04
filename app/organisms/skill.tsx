type SkillSet = {
  name: string;
  isLove: boolean;
};

const langSkills: SkillSet[] = [
  { name: 'Rust', isLove: true },
  { name: 'TypeScript', isLove: true },
  { name: 'Kotlin', isLove: true },
  { name: 'Python', isLove: false },
  { name: 'Java', isLove: false },
  { name: 'JavaScript', isLove: false }
];

const Display = ({ name, isLove }: SkillSet) => (
  <span className={isLove ? 'text-pink-500' : ''}>{name}</span>
);

export const Skill = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl">Skill</h1>
      <div className="mt-2">
        {langSkills.map((langSkill, index) => (
          <>
            <Display {...langSkill} />
            {index < langSkills.length - 1 && ', '}
          </>
        ))}
      </div>
    </div>
  );
};
