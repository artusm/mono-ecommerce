import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  name: string;
  href: string;
}

export const Name: React.FC<Props> = (props) => {
  const { name, href } = props;

  return (
    <Link href={href}>
      <a
        className={clsx(
          'text-base font-semibold uppercase',
          'hover:(underline)',
        )}
      >
        {name}
      </a>
    </Link>
  );
};
