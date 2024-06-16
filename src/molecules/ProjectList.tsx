import { css } from '../../styled-system/css';
import { grid } from '../../styled-system/patterns';
import { Link } from '../style/recipes/link.css';
import { useEffect, useState } from 'react';

interface ProjectProps {
  name: string;
  description: string;
  repository: string;
}

export const ProjectList = () => {
  const [projectData, setProjectData] = useState<ProjectProps[]>();

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/data/project-data.json');
      const data = (await res.json()) as ProjectProps[];
      setProjectData(data);
    };
    fetchProjects();
  });

  return (
    <div
      className={grid({
        gridTemplateColumns: { base: 2 },
        gap: 3,
        mt: 3
      })}
    >
      {projectData?.map((project) => (
        <article className={css({ border: '1px dashed gray', p: 3 })}>
          <a
            href={new URL(project?.repository, 'https://github.com').href}
            className={Link({ textStyle: 'body' })}
          >
            {project.name}
          </a>
          <p className={css({ textStyle: 'caption', color: 'gray' })}>
            {project?.description}
          </p>
        </article>
      ))}
    </div>
  );
};
