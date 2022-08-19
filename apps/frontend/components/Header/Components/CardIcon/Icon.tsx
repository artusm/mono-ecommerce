import React from 'react';
import clsx from 'clsx';
import { NavButton } from '@ecommerce/shared/ui/NavButton';

interface Props {
  cartItemsQuantity: number;
}

const Icon: React.FC<Props> = ({ cartItemsQuantity }) => {
  return (
    <NavButton type="cartBlack">
      {cartItemsQuantity > 0 && (
        <span
          className={clsx(
            'h-4.75 top-0 right-0 w-4.75 absolute',
            'flex items-center justify-center',
            'bg-sky-600',
            'rounded-full',
            'text-xs text-white'
          )}
          aria-hidden="true"
        >
          {cartItemsQuantity}
        </span>
      )}
    </NavButton>
  );
};

export default Icon;
