import { ProductCartQuery } from '@ecommerce/shared/graphql/types';
import { createItemHref } from '@ecommerce/shared/utils/url';
import { formatPrice } from '@ecommerce/shared/utils/format-price';
import clsx from 'clsx';
import { useMemo } from 'react';
import { AmountControl } from './Components/AmountControl';
import { BaseControl } from './Components/BaseControl';
import { CoverImage } from './Components/CoverImage';
import { Name } from './Components/Name';

export interface CartItemProps {
  item: NonNullable<
    NonNullable<ProductCartQuery['products']>['data'][number]['attributes']
    >;
  isFavorite?: boolean;
  inCartAmount?: number;
  handleCartMinusClick: () => void;
  handleCartPlusClick: () => void;
  handleRemoveFromCart: () => void;
  toggleFavorite: () => void;
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const {
    item,
    isFavorite = false,
    inCartAmount = 0,
    handleCartMinusClick,
    handleCartPlusClick,
    handleRemoveFromCart,
    toggleFavorite,
  } = props;

  const { slug, price, name, images } = item;

  const href = useMemo(() => createItemHref(slug), [slug]);

  return (
    <div className={clsx('w-full', 'flex')}>
      <CoverImage href={href} images={images} name={name} />
      <div className={clsx('ml-8 w-full', 'flex flex-col')}>
        <div
          className={clsx(
            'w-full',
            'flex flex-wrap items-center justify-between gap-x-1'
          )}
        >
          <Name name={name} href={href} />
          <span className="font-bold">{formatPrice(price * inCartAmount)}</span>
        </div>
        <small className="mt-1">{item.smallDescription}</small>
        <div
          className={clsx(
            'mt-auto',
            'flex gap-8 items-center flex-wrap',
            'md:(gap-4)',
            'lg:(gap-8)'
          )}
        >
          <AmountControl
            inCartAmount={inCartAmount}
            handleCartMinusClick={handleCartMinusClick}
            handleCartPlusClick={handleCartPlusClick}
          />
          <BaseControl
            isFavorite={isFavorite}
            handleRemoveFromCart={handleRemoveFromCart}
            toggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    </div>
  );
};
