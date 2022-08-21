import React, { useMemo, useState } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import type { Product } from '@ecommerce/shared/graphql/refactored-types';
import { handleBlur } from '@ecommerce/shared/utils/handle-blur';
import { createItemHref } from '@ecommerce/shared/utils/url';

import { Amount } from './LocalComponents/Amount';
import { Cart } from './LocalComponents/Cart';
import { CoverImage } from './LocalComponents/CoverImage';
import { Favorite } from './LocalComponents/Favorite';
import { Information } from './LocalComponents/Information';

export interface ItemCardProps {
    item: Product;
    handleCartClick: () => void;
    handleAmountCartClick: () => void;
    handleFavoriteClick: () => void;
    size?: typeof SIZES[number];
    elementProps?: JSX.IntrinsicElements['div'];
    isFavorite?: boolean;
    inCartAmount?: number;
}

const SIZES = ['base', 'lg', 'parent'] as const;

export function createLabel(item: Product) {
    const { name, smallDescription, price } = item;

    return `${name}, ${smallDescription}, price: ${price}`;
}

export const ItemCard: React.FC<ItemCardProps> = (props) => {
    const {
        item,
        elementProps,
        size = 'parent',
        handleCartClick,
        handleAmountCartClick,
        handleFavoriteClick,
        isFavorite = false,
        inCartAmount = 0,
    } = props;

    const [{ hover, focus }, setFocusHover] = useState({
        focus: false,
        hover: false,
    });

    const hovered = useMemo(() => focus || hover, [focus, hover]);
    const href = useMemo(() => createItemHref(item.slug), [item.slug]);

    return (
        <div
            className={clsx(
                'relative',
                'flex flex-col',
                'list-none',
                size === 'base' && 'w-60',
                size === 'lg' && 'w-72',
                size === 'parent' && 'w-full h-full',
            )}
            {...elementProps}
            onMouseOver={() =>
                setFocusHover((prev) => ({ ...prev, hover: true }))
            }
            onMouseLeave={() =>
                setFocusHover((prev) => ({ ...prev, hover: false }))
            }
            onFocus={() => setFocusHover((prev) => ({ ...prev, focus: true }))}
            onBlur={(e) => {
                handleBlur(e)(
                    () =>
                        void setFocusHover((prev) => ({
                            ...prev,
                            focus: false,
                        })),
                );
            }}
            data-testid="item-card"
        >
            <Link href={href}>
                <a className="mb-1" title={createLabel(item)}>
                    <div
                        className={clsx(
                            'relative w-full mb-2',
                            'object-cover bg-gray-100',
                            size === 'parent' && 'aspect-square',
                            size === 'base' && 'h-72',
                            size === 'lg' && 'h-80',
                        )}
                    >
                        <CoverImage product={item} hovered={hovered} />
                    </div>
                    <Information product={item} hovered={hovered} />
                </a>
            </Link>
            <div className="flex gap-2 md:(absolute right-0 bottom-0) ">
                <div className={clsx('relative', !hovered && 'sm:(opacity-0)')}>
                    <Cart handleClick={handleCartClick} />
                    {inCartAmount > 0 && (
                        <Amount
                            handleClick={handleAmountCartClick}
                            inCartAmount={inCartAmount}
                        />
                    )}
                </div>
                <Favorite
                    handleClick={handleFavoriteClick}
                    hovered={hovered}
                    isFavorite={isFavorite}
                />
            </div>
        </div>
    );
};
