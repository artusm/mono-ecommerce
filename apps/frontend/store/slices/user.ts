import { createSlice, createSelector } from '@reduxjs/toolkit';

export interface CurrentUserState {
  user: any;
}

const initialState: CurrentUserState = {
  user: {},
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state: CurrentUserState, action: unknown) => {
      return initialState;
    },
    clearCurrentUser() {
      return initialState;
    },
  },
});

export const isCurrentUserExist = createSelector(
  (state: CurrentUserState) => state.user,
  (currentUser) => !!currentUser
);

export const favoriteItemsActions = currentUserSlice.actions;

export default currentUserSlice.reducer;
