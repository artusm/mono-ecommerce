import React from 'react';

import clsx from 'clsx';

import type { FavoriteProductsQuery } from '@ecommerce/shared/graphql/types';

import { ItemCardLogic } from '@/components/ItemCardLogic';

interface Props {
  products: FavoriteProductsQuery;
}

export const List: React.FC<Props> = (props) => {
  const { products } = props;

  if (!products.products?.data.length) return <p>No Favorites</p>;

  return (
    <ul className="flex flex-wrap gap-4">
      {products.products?.data.map(
        (item) =>
          item.attributes && (
            <li
              className={clsx(
                'w-[calc(50%-0.5rem)]',
                'sm:w-[calc(33.3%-1rem)]',
                'lg:w-[calc(25%-0.75rem)]',
              )}
              key={item.attributes.slug}
            >
              <ItemCardLogic item={item.attributes} />
            </li>
          ),
      )}
    </ul>
  );
};
