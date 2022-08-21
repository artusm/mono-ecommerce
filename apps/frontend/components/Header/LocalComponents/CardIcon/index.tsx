import React from 'react';

import { useSelector } from 'react-redux';

import { AppState } from '@/store';
import { getCartItemsQuantity } from '@/store/slices/cart-items';

import Icon from './Icon';

const CardIcon: React.FC = () => {
  const cartItemsQuantity = useSelector((state: AppState) =>
    getCartItemsQuantity(state.cardItems),
  );

  return <Icon cartItemsQuantity={cartItemsQuantity} />;
};

export default CardIcon;
