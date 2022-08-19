import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import FavoriteItemsReducer, {
  favoriteItemsSlice,
} from './slices/favorite-items';
import CardItemsReducer, { cardItemsSlice } from './slices/cart-items';
import CardUIReducer, { cardUISlice } from './slices/cart-ui';

const reducers = combineReducers({
  [favoriteItemsSlice.name]: FavoriteItemsReducer,
  [cardItemsSlice.name]: CardItemsReducer,
  [cardUISlice.name]: CardUIReducer,
});

const makeStore = () => {
  const store = configureStore({
    reducer:
      typeof window === 'undefined'
        ? reducers
        : persistReducer(
            {
              key: 'root',
              storage,
              blacklist: [],
            },
            reducers
          ),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  persistStore(store);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
