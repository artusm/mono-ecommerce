import type { FavoriteProductsQuery } from '@ecommerce/shared/graphql/types';
import React from 'react';

import { List } from './LocalComponents/List';

interface Props {
  products?: FavoriteProductsQuery;
  isLoading: boolean;
}

export const Favorite: React.FC<Props> = (props) => {
  const { products, isLoading } = props;

  return (
    <section>
      <h1 className="font-semibold mb-4 text-3xl">Favorites</h1>
      {isLoading || !products ? (
        <small className="text-xs">Waiting...</small>
      ) : (
        <List products={products} />
      )}
    </section>
  );
};
