import React from 'react';

import { Button } from '@ecommerce/shared/ui/Button';
import { Icon } from '@ecommerce/shared/ui/Icon';

interface Props {
  handleFavoriteClick: () => void;
  isFavorite: boolean;
}

export const Favorite: React.FC<Props> = (props) => {
  const { isFavorite, handleFavoriteClick } = props;

  return (
    <Button
      classes="flex justify-center items-center"
      tag="button"
      size="lg"
      type="transparent-border"
      elProps={{
        onClick: handleFavoriteClick,
        title: 'add to favorite',
        type: 'button',
      }}
    >
      <Icon icon="heart" fill={isFavorite ? 'red' : 'none'} size="sm" />
    </Button>
  );
};
