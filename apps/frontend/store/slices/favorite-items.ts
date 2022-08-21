import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

export interface FavoriteItemsState {
  slugs: string[];
}

const initialState: FavoriteItemsState = {
  slugs: [],
};

export const favoriteItemsSlice = createSlice({
  name: 'favoriteItems',
  initialState,
  reducers: {
    toggleFavorite: (
      state: FavoriteItemsState,
      action: PayloadAction<string>,
    ) => {
      const index = state.slugs.indexOf(action.payload);

      index !== -1
        ? state.slugs.splice(index, 1)
        : state.slugs.push(action.payload);
    },
    clear: () => {
      return initialState;
    },
  },
});

export const isFavoriteSelector = createSelector(
  [
    (state: FavoriteItemsState) => state.slugs,
    (_, slug: string): string => slug,
  ],
  (slugs, slug) => slugs.includes(slug),
);

export const getFavoriteItemsQuantity = createSelector(
  (state: FavoriteItemsState) => state.slugs,
  (slugs) => slugs.length,
);

export const { toggleFavorite } = favoriteItemsSlice.actions;

export default favoriteItemsSlice.reducer;
