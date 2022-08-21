import FeatherIcon from 'feather-icons-react';
import clsx from 'clsx';
import { Spinner } from './Components/Spinner';
import {SVGAttributes} from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  icon?: keyof typeof ICONS;
  loading?: boolean;
  classes?: string;
  size?: typeof SIZES[number];
}

export const ICONS = {
  cart: 'shopping-cart',
  cartBlack: 'shopping-cart',
  heartFilled: 'heart',
  user: 'user',
  arrowRight: 'arrow-right',
  arrowRightBlack: 'arrow-right',
  'arrow-right': 'arrow-right',
  heart: 'heart'
} as const;

const SIZES = ['sm', 'base', 'lg'] as const;

export const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { icon = 'cart', classes, size = 'base', loading, ...other } = props;

  return (
    <div
      className={clsx(
        'relative',
        'flex items-center',
        'select-none pointer-events-none',

        size === 'sm' && 'h-4 w-4  sm:(h-6 w-6)',
        size === 'base' && 'h-5 w-5',
        size === 'lg' && 'h-8 w-8',

        classes
      )}
      aria-hidden="true"
    >
      {loading ? (
        <Spinner />
      ) : (
        <FeatherIcon icon={ICONS[icon] || icon} {...other} />
      )}
    </div>
  );
};
