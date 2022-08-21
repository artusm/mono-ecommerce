import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '@/store';
import {
  AddCartPayload,
  addCart,
  getInCartAmount,
} from '@/store/slices/cart-items';

export const useCartItem = (slug: string) => {
  const dispatch = useDispatch();
  const inCartAmount = useSelector((state: AppState) =>
    getInCartAmount(state.cardItems, slug),
  );

  const add = useCallback(
    ({ amount }: AddCartPayload) => {
      dispatch(addCart({ slug, amount }));
    },
    [slug],
  );

  return {
    inCartAmount,
    addCart: add,
  };
};
