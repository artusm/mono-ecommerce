import Icon from './Icon';
import { useSelector } from 'react-redux';
import { AppState } from '@/store';
import { getFavoriteItemsQuantity } from '@/store/slices/favorite-items';
import React from "react";

const CardIcon: React.FC = () => {
  const favoriteItemsQuantity = useSelector((state: AppState) =>
    getFavoriteItemsQuantity(state.favoriteItems)
  );

  return <Icon favoriteItemsQuantity={favoriteItemsQuantity} />;
};

export default CardIcon;
