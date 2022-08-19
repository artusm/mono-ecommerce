import React, { useState } from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import type { Props as ContentProps } from './content';
import FeatherIcon from 'feather-icons-react';

interface Props {
  data: {
    title: string;
    content: string;
  };
}

const LazyContent = dynamic<ContentProps>(() =>
  import('./content').then(({ Content }) => Content)
);

export const Item: React.FC<Props> = (props) => {
  const { data } = props;

  const [open, setOpen] = useState(false);

  return (
    <li className={clsx('w-full py-8', 'flex flex-col', 'border-t')}>
      <button
        className={clsx(
          'flex justify-between items-center',
          'text-3xl  font-semibold',
          'cursor-pointer',
          'hover:(underline)'
        )}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {data.title}
        <div
          className={clsx(
            'h-8 w-8 relative',
            'transition-transform transform',
            open && 'rotate-90'
          )}
          aria-hidden="true"
        >
          <FeatherIcon icon="arrow-right" />
        </div>
      </button>
      {open && <LazyContent content={data.content} />}
    </li>
  );
};
