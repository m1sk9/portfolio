import { About } from './organisms/about';
import { Profile } from './organisms/profile';
import { Project } from './organisms/project';
import { Skill } from './organisms/skill';
import { Timeline } from './organisms/timeline';

export default function Home() {
  return (
    <div className="m-auto max-w-screen-lg px-12 mb-20 flex flex-col text-white">
      <About />
      <Profile />
      <Timeline />
      <Skill />
      <Project />
    </div>
  );
}
