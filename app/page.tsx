import { About } from './organisms/about';
import { Profile } from './organisms/profile';

export default function Home() {
  return (
    <div className="m-auto max-w-screen-lg px-20 flex flex-col text-white">
      <About />
      <Profile />
    </div>
  );
}
