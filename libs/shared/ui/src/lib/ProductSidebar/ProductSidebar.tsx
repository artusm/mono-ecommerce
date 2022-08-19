import { ProductSlugQuery } from '@ecommerce/shared/graphql/types';
import { formatPrice } from '@ecommerce/shared/utils/format-price';
import clsx from 'clsx';
import { Cart } from './Components/Cart';
import { Favorite } from './Components/Favorite';

export interface ProductSidebarProps {
  product: NonNullable<
    NonNullable<ProductSlugQuery['products']>['data'][0]['attributes']
    >;
  handleCartClick: () => void;
  handleRemoveCartClick: () => void;
  handleFavoriteClick: () => void;
  isFavorite: boolean;
  inCartAmount: number;
}

export const ProductSidebar: React.FC<ProductSidebarProps> = (props) => {
  const {
    product,
    handleCartClick,
    handleFavoriteClick,
    handleRemoveCartClick,
    inCartAmount,
    isFavorite
  } = props;

  const { name, price, smallDescription } = product;

  return (
    <aside
      className={clsx(
        'h-full min-w-56 w-full',
        'flex flex-col',
        'md:(order-2 top-12 sticky w-2/5)'
      )}
    >
      <div className={clsx('mb-2', 'flex items-center justify-between')}>
        <h1
          className={clsx(
            'max-w-3/5',
            'font-bold text-3xl uppercase break-words'
          )}
        >
          {name}
        </h1>
        <span className="font-semibold text-base">{formatPrice(price)}</span>
      </div>
      <p className={clsx('text-sm', 'opacity-75')}>{smallDescription}</p>
      <div className={clsx('mt-8', 'flex gap-4 justify-between')}>
        <Cart
          inCartAmount={inCartAmount}
          handleCartClick={handleCartClick}
          handleRemoveCartClick={handleRemoveCartClick}
        />
        <Favorite
          isFavorite={isFavorite}
          handleFavoriteClick={handleFavoriteClick}
        />
      </div>
    </aside>
  );
};
