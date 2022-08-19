import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';

type ConditionalProps =
  | {
  tag: 'a';
  elProps?: JSX.IntrinsicElements['a'] & {
    href: NonNullable<JSX.IntrinsicElements['a']['href']>;
  };
}
  | {
  tag: 'button';
  elProps?: JSX.IntrinsicElements['button'];
};

export type ButtonProps = ConditionalProps & {
  size?: typeof SIZES[number];
  type?: typeof TYPES[number];
  round?: typeof ROUNDS[number];
  basic?: boolean;
  classes?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

const SIZES = ['parent', 'base', 'lg', 'sm'] as const;
const TYPES = [
  'primary',
  'transparent',
  'black',
  'transparent-border',
] as const;
const ROUNDS = ['full', 'sm', 'base'] as const;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    tag,
    elProps,
    basic = false,
    size = 'base',
    type = 'primary',
    round = 'full',
    classes,
    disabled,
    children,
  } = props;

  const className = useMemo(
    () =>
      basic
        ? clsx(
          'inline-block',
          'cursor-pointer',
          'transform-gpu transition-all',
          'active:scale-92',

          disabled && 'opacity-50 pointer-events-none',
          classes
        )
        : clsx(
          'inline-block',
          'cursor-pointer',
          'transform-gpu transition-all',
          'active:scale-92',

          round === 'full' && 'rounded-full',
          round === 'sm' && 'rounded-lg',
          round === 'base' && 'rounded-xl',

          size === 'parent' && 'w-full h-full',
          size === 'sm' && 'p-2',
          size === 'base' && 'p-3',
          size === 'lg' && 'p-4',

          type === 'primary' &&
          'text-white bg-sky-600 hover:(bg-sky-700) active:(bg-sky-800)',
          type === 'transparent' &&
          'hover:(bg-gray-100) active:(bg-gray-300)',
          type === 'black' && 'bg-black text-white hover:(bg-dark-400)',
          type === 'transparent-border' &&
          'hover:(bg-gray-100 border-black) active:(bg-gray-300) border border-gray-300',

          disabled && 'opacity-50 pointer-events-none',
          classes
        ),
    [type, size, round, classes, disabled, basic]
  );

  if (tag === 'a') {
    return (
      <Link href={elProps?.href || '/'}>
        <a className={className} {...elProps}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={className} {...elProps}>
      {children}
    </button>
  );
};
