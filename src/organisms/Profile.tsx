import { Heading } from '@/src/molecules/Recipes';
import { ProfileLink } from '@/src/organisms/Links';
import { css } from '@/styled-system/css';
import Image from 'next/image';
import Link from 'next/link';

export const Profile = () => {
  return (
    <div className={css({ display: 'flex', alignItems: 'center' })}>
      <Image
        src={'https://github.com/m1sk9.png'}
        alt={"m1sk9's icon"}
        width={100}
        height={100}
      />
      <div className={css({ display: 'flex', flexDirection: 'column', ml: 6 })}>
        <div className={Heading({})}>m1sk9</div>
        <ProfileLink />
        <Link href={'/links'} className={css({ color: 'aqua', mt: 2 })}>
          Other Links →
        </Link>
      </div>
    </div>
  );
};
