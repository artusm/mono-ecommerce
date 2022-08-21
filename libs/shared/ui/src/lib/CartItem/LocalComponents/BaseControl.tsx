import React from 'react';

import clsx from 'clsx';

interface Props {
  isFavorite: boolean;
  handleRemoveFromCart: () => void;
  toggleFavorite: () => void;
}

export const BaseControl: React.FC<Props> = (props) => {
  const { isFavorite = false, handleRemoveFromCart, toggleFavorite } = props;

  return (
    <div
      className={clsx(
        'gap-8 items-center hidden',
        'text-xs',
        'xs:(flex)',
        'sm:(text-base)',
        'md:(text-xs gap-4)',
        'lg:(text-base gap-8)',
      )}
    >
      <button
        className="hover:(underline)"
        onClick={handleRemoveFromCart}
        type="button"
      >
        Remove item
      </button>
      <button
        className="hover:(underline)"
        onClick={toggleFavorite}
        type="button"
      >
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </div>
  );
};
