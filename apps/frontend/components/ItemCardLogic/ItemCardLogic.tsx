import React from 'react';

import { ItemCard, ItemCardProps } from '@ecommerce/shared/ui/ItemCard';

import { useCartItem } from '@/hooks/useCartItem';
import { useFavorite } from '@/hooks/useFavorite';

type Props = Omit<
    ItemCardProps,
    | 'handleCartClick'
    | 'handleFavoriteClick'
    | 'isFavorite'
    | 'inCartAmount'
    | 'handleAmountCartClick'
>;

export const ItemCardLogic: React.FC<Props> = ({ item }) => {
    const { isFavorite, toggleFavorite } = useFavorite(item.slug);
    const { addCart, inCartAmount } = useCartItem(item.slug);

    return (
        <ItemCard
            handleAmountCartClick={() =>
                addCart({ slug: item.slug, amount: -16 })
            }
            handleCartClick={() => addCart({ slug: item.slug, amount: 1 })}
            handleFavoriteClick={() => toggleFavorite()}
            isFavorite={isFavorite}
            inCartAmount={inCartAmount}
            item={item}
        />
    );
};
