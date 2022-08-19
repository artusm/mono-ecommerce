import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import {
  isFavoriteSelector,
  toggleFavorite,
} from '../store/slices/favorite-items';
import { useCallback } from 'react';

export const useFavorite = (slug: string) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: AppState) =>
    isFavoriteSelector(state.favoriteItems, slug)
  );

  const toggle = useCallback(() => {
    dispatch(toggleFavorite(slug));
  }, [slug]);

  return {
    isFavorite,
    toggleFavorite: toggle,
  };
};
