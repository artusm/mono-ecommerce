import clsx from 'clsx';
import { ItemCardLogic } from '../../../components/ItemCardLogic';
import type { GetHomePageData } from '../Home';
import React from 'react';

interface Props {
  products: GetHomePageData<'products'>;
}

export const ProductsSection: React.FC<Props> = (props) => {
  const { products } = props;

  return (
    <section>
      <h2 className={clsx('mb-4', 'font-semibold text-3xl')}>Products</h2>
      <ul className="flex flex-wrap gap-4">
        {products?.data.map(
          (product) =>
            product.attributes && (
              <li
                className={clsx(
                  'w-[calc(50%-0.5rem)]',
                  'sm:(w-[calc(33.3%-1rem)])',
                  'lg:(w-[calc(25%-0.75rem)])'
                )}
                key={product.id}
              >
                <ItemCardLogic item={product.attributes} />
              </li>
            )
        )}
      </ul>
    </section>
  );
};
