import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import { createWrapper } from 'next-redux-wrapper';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import CardItemsReducer, { cardItemsSlice } from './slices/cart-items';
import CardUIReducer, { cardUISlice } from './slices/cart-ui';
import FavoriteItemsReducer, {
  favoriteItemsSlice,
} from './slices/favorite-items';

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
            reducers,
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
