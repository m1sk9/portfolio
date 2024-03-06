import { About } from '@/src/organisms/About';
import { Profile } from '@/src/organisms/Profile';
import { Projects } from '@/src/organisms/Projects';
import { Skills } from '@/src/organisms/Skills';
import { Timeline } from '@/src/organisms/Timeline';
import { css } from '@/styled-system/css';
import { container } from '@/styled-system/patterns';

export default function Home() {
  return (
    <div
      className={container({
        marginX: { base: 15, lg: 40 },
        mt: 20,
        mb: 20,
        gap: 20
      })}
    >
      <div
        className={css({ display: 'flex', flexDirection: 'column', gap: 20 })}
      >
        <Profile />
        <About />
        <Timeline />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
