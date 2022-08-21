import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '@/store';
import { getFavoriteItemsQuantity } from '@/store/slices/favorite-items';

import Icon from './Icon';

const CardIcon: React.FC = () => {
  const favoriteItemsQuantity = useSelector((state: AppState) =>
    getFavoriteItemsQuantity(state.favoriteItems),
  );

  return <Icon favoriteItemsQuantity={favoriteItemsQuantity} />;
};

export default CardIcon;
