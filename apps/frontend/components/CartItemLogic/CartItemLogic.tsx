import { ProductCartQuery } from '@ecommerce/shared/graphql/types';
import { CartItem } from '@ecommerce/shared/ui/CartItem';
import { useFavorite } from '../../hooks/useFavorite';
import { useCartItem } from '../../hooks/useCartItem';
import { MAXIMUM_IN_CART } from '../../lib/constants';

interface Props {
  item: NonNullable<
    NonNullable<ProductCartQuery['products']>['data'][number]['attributes']
  >;
}

export const CartItemLogic: React.FC<Props> = ({ item }) => {
  const { isFavorite, toggleFavorite } = useFavorite(item.slug);
  const { addCart, inCartAmount } = useCartItem(item.slug);

  return (
    <CartItem
      item={item}
      isFavorite={isFavorite}
      inCartAmount={inCartAmount}
      handleCartMinusClick={() => addCart({ amount: -1, slug: item.slug })}
      handleCartPlusClick={() => addCart({ amount: 1, slug: item.slug })}
      handleRemoveFromCart={() =>
        addCart({ amount: -MAXIMUM_IN_CART, slug: item.slug })
      }
      toggleFavorite={() => void toggleFavorite()}
    />
  );
};
