import clsx from 'clsx';
import { formatPrice } from '@ecommerce/shared/utils/format-price';
import { Checkout } from './LocalComponents/Checkout';

export interface CartSidebarProps {
  cartTotal: number;
  isUser: boolean;
  handleCheckoutClick: () => Promise<void>;
  isLoading?: boolean;
}

export const CartSidebar: React.FC<CartSidebarProps> = (props) => {
  const { cartTotal, isUser, handleCheckoutClick, isLoading } = props;

  return (
    <aside
      className={clsx(
        'w-full',
        'flex flex-col',
        'md:(w-1/3 top-12 sticky h-full)'
      )}
    >
      <h2
        className={clsx(
          'mb-2',
          'flex justify-between items-center flex-wrap gap-1'
        )}
      >
        <span className="font-semibold text-base">Total</span>
        <span className="font-bold text-xl">{formatPrice(cartTotal)}</span>
      </h2>
      <small className="mb-8 inline-block">Excluding delivery</small>
      <Checkout
        isLoading={isLoading}
        isUser={isUser}
        handleCheckoutClick={handleCheckoutClick}
      />
    </aside>
  );
};
