import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CardUIState {
  cartBoxIsVisible: boolean;
}

const initialState: CardUIState = {
  cartBoxIsVisible: false,
};

export const cardUISlice = createSlice({
  name: 'cardUI',
  initialState,
  reducers: {
    toggleCartBox(state, action: PayloadAction<boolean>) {
      state.cartBoxIsVisible = action.payload;
    },
  },
});

export const cardUIActions = cardUISlice.actions;

export default cardUISlice.reducer;
