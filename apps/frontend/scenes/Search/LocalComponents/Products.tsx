import React from 'react';

import clsx from 'clsx';

import { ProductSearchQuery } from '@ecommerce/shared/graphql/types';

import { ItemCardLogic } from '@/components/ItemCardLogic';

interface Props {
    products: NonNullable<ProductSearchQuery['products']>['data'];
}

export const Products: React.FC<Props> = (props) => {
    const { products } = props;

    return (
        <ul className="flex flex-wrap gap-4">
            {products.map(
                (product) =>
                    product.attributes && (
                        <li
                            className={clsx(
                                'w-[calc(50%-0.5rem)]',
                                'sm:(w-[calc(33.3%-1rem)])',
                                'lg:(w-[calc(25%-0.75rem)])',
                            )}
                            key={product.id}
                        >
                            <ItemCardLogic item={product.attributes} />
                        </li>
                    ),
            )}
        </ul>
    );
};
