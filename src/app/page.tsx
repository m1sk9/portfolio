import Image from 'next/image';

import { About } from '../organisms/about';
import { Keys } from '../organisms/keys';
import { Profile } from '../organisms/profile';
import { Project } from '../organisms/project';
import { Skill } from '../organisms/skill';
import { Timeline } from '../organisms/timeline';

export default function Home() {
  return (
    <div className="m-auto max-w-screen-lg px-12 mb-20 flex flex-col text-white">
      <About />
      <Profile />
      <Timeline />
      <Skill />
      <Project />
      <Keys />
      <p className="mt-2">© {new Date().getFullYear()} m1sk9</p>
      <Image
        src={'https://count.getloli.com/get/@m1sk9?theme=rule34'}
        className="mt-2"
        width={300}
        height={300}
        alt="moe"
      />
    </div>
  );
}
