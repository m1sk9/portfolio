import { useEffect, useState } from "react";
import styles from "../../styles/components/skill.module.css";

type SkillSection = "Languages" | "Frontend" | "Backend" | "Others";

interface SkillsListProps {
  sections: SkillSection[];
  skills: string[];
}

export default function Skills() {
  const [skills, setSkills] = useState<SkillsListProps[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch("./skills.json");
      const data = (await res.json()) as SkillsListProps[];
      setSkills(data);
    };
    fetchSkills();
  });

  return (
    <div>
      <h2>Skills</h2>
      <ul className={styles.skill_list}>
        {skills.map((i) => (
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
