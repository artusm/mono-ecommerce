import React from 'react';

import clsx from 'clsx';

import { ProductCartQuery } from '@ecommerce/shared/graphql/types';

import { CartItemLogic } from '@/components/CartItemLogic';

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
                            <CartItemLogic item={product.attributes} />
                        </li>
                    ),
            )}
        </ul>
    );
};
