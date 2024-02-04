import { About } from './organisms/about';
import { Profile } from './organisms/profile';
import { Timeline } from './organisms/timeline';

export default function Home() {
  return (
    <div className="m-auto max-w-screen-lg px-12 flex flex-col text-white">
      <About />
      <Profile />
      <Timeline />
    </div>
  );
}
