import styles from "../../styles/components/skill.module.css";

type SkillSection = "Languages" | "Frontend" | "Backend" | "Others";

interface SkillsListProps {
  sections: SkillSection;
  skills: string[];
}

const skillsList: SkillsListProps[] = [
  {
    sections: "Languages",
    skills: ["TypeScript (JavaScript)", "Kotlin", "Rust", "Python"],
  },
  {
    sections: "Frontend",
    skills: ["HTML5", "CSS", "React", "Next.js"],
  },
  {
    sections: "Backend",
    skills: ["Node.js", "Deno"],
  },
  {
    sections: "Others",
    skills: ["Git", "GitHub", "Docker"],
  },
];

export default function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <ul className={styles.skill_list}>
        {skillsList.map((i) => (
          // biome-ignore lint/correctness/useJsxKeyInIterable: JSX key prop is not required for this use case
          <li>
            <p>{i.sections}</p>
            <ul>
              <li>
                <p>{i.skills.join(", ")}</p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
