import Image from 'next/image';

import { About } from '../organisms/About';
import { Keys } from '../organisms/Keys';
import { Profile } from '../organisms/Profile';
import { Project } from '../organisms/Project';
import { Skill } from '../organisms/Skill';
import { Timeline } from '../organisms/Timeline';

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
