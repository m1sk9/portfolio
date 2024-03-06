import { About } from '@/src/organisms/About';
import { Profile } from '@/src/organisms/Profile';
import { Projects } from '@/src/organisms/Projects';
import { Skills } from '@/src/organisms/Skills';
import { Timeline } from '@/src/organisms/Timeline';
import { css } from '@/styled-system/css';
import { container } from '@/styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

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

        <div>
          <Link
            href={'https://github.com/m1sk9/portfolio'}
            className={css({ textDecoration: 'underline' })}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code available at GitHub
          </Link>
          <p className={css({ mt: 2 })}>© {new Date().getFullYear()} m1sk9</p>
          <Image
            src={'https://count.getloli.com/get/@m1sk9?theme=rule34'}
            className={css({ mt: 2 })}
            width={300}
            height={300}
            alt="moe"
          />
        </div>
      </div>
    </div>
  );
}
