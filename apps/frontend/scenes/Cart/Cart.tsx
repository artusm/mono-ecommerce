import { ProductCartQuery } from '@ecommerce/shared/graphql/types';
import React, { useMemo, useState } from 'react';
import { CartSidebar } from '@ecommerce/shared/ui/CartSidebar';
import { List } from './Components/List';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { CardItemsState } from '../../store/slices/cart-items';

interface Props {
  products?: ProductCartQuery;
  isProductsLoading: boolean;
  cartItems: CardItemsState['items'];
}

export const Cart: React.FC<Props> = (props) => {
  const { products, isProductsLoading, cartItems } = props;

  const [loading, setLoading] = useState(false);
  const userValue = {};

  const cartTotal = useMemo(() => {
    if (!products?.products?.data) return 0;

    return products.products.data.reduce((prev, cur) => {
      if (!cur.attributes) return prev;

      const amount = cartItems[cur.attributes.slug];
      const calculation = prev + cur.attributes.price * (amount || 0);

      return calculation;
    }, 0);
  }, [products, cartItems]);

  const cartIDMap = useMemo(() => {
    if (!products?.products?.data) return new Map();

    return products.products.data.reduce((prev, cur) => {
      if (!cur.attributes || !cur.id) return prev;

      const amount = cartItems[cur.attributes.slug];
      if (!amount) return prev;

      prev.set(cur.id, amount);

      return prev;
    }, new Map<string, number>());
  }, [products, cartItems]);

  const handleCheckoutClick = async () => {
    setLoading(true);
  };

  return (
    <section>
      <h1 className="font-semibold mb-4 text-3xl">Shopping Bag</h1>
      {isProductsLoading || !products ? (
        <small className="text-xs">Waiting...</small>
      ) : products.products?.data.length ? (
        <div className={clsx('flex flex-col gap-24', 'md:(flex-row)')}>
          <List products={products.products.data} />
          <CartSidebar
            isLoading={loading}
            cartTotal={cartTotal}
            handleCheckoutClick={handleCheckoutClick}
            isUser={!!userValue}
          />
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </section>
  );
};
