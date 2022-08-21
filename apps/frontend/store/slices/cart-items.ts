import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { MAXIMUM_IN_CART } from '@/lib/constants';

export interface CardItemsState {
    items: {
        [slug: string]: number;
    };
}

const initialState: CardItemsState = {
    items: {},
};

export interface AddCartPayload {
    amount: number;
    slug: string | string[];
}

export const cardItemsSlice = createSlice({
    name: 'cardItems',
    initialState,
    reducers: {
        addCart: (
            state: CardItemsState,
            action: PayloadAction<AddCartPayload>,
        ) => {
            const { slug, amount } = action.payload;
            const slugs = Array.isArray(slug) ? slug : [slug];

            for (const currentSlug of slugs) {
                const foundItem = state.items[currentSlug];

                const nextValue = Math.min(
                    (foundItem || 0) + amount,
                    MAXIMUM_IN_CART,
                );

                if (nextValue < 1) {
                    delete state.items[currentSlug];
                    continue;
                }
                state.items[currentSlug] = nextValue;
            }
        },
    },
});

export const getInCartAmount = createSelector(
    [(state: CardItemsState) => state.items, (_, slug: string): string => slug],
    (items, slug) => items[slug] || 0,
);

export const getCartItemsQuantity = createSelector(
    (state: CardItemsState) => state.items,
    (items) => Object.values(items).reduce((prev, curr) => prev + curr, 0),
);

export const getCartUniqueItemsQuantity = createSelector(
    (state: CardItemsState) => state.items,
    (items) => Object.values(items).filter((amount) => amount > 0).length,
);

export const { addCart } = cardItemsSlice.actions;

export default cardItemsSlice.reducer;
