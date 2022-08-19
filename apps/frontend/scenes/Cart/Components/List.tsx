import { CartItemLogic } from '../../../components/CartItemLogic';
import { ProductCartQuery } from '@ecommerce/shared/graphql/types';
import clsx from 'clsx';
import React from "react";

interface Props {
  products: NonNullable<ProductCartQuery['products']>['data'];
}

export const List: React.FC<Props> = (props) => {
  const { products } = props;

  return (
    <ul className={clsx('w-full', 'flex flex-col gap-4')}>
      {products.map(
        (product) =>
          product.attributes && (
            <li key={product.id}>
              <CartItemLogic
                item={product.attributes}
              />
            </li>
          )
      )}
    </ul>
  );
};
