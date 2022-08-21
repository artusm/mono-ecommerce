import { ButtonProps } from '../lib/Button';
import {CartItemProps} from "@ecommerce/shared/ui/CartItem";
import {ProductSidebarProps} from "@ecommerce/shared/ui/ProductSidebar";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cat from './cat.jpg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cat2 from './cat2.jpeg';

export const PRODUCT: ProductSidebarProps['product'] = {
  slug: 'some-name',
  price: 65,
  name: 'Some name',
  images: {
    data: [
      {
        attributes: {
          url: cat,
        },
      },
      {
        attributes: {
          url: cat2,
        },
      },
    ],
  },
  smallDescription: 'Small Description',
  description: 'Description',
  information: [
    {
      title: 'Title1',
      content: 'content1',
    },
  ],
};

export const BUTTON_DEFAULT_PROPS: ButtonProps = {
  children: 'hello',
  tag: 'button',
  size: 'base',
  type: 'primary',
  round: 'full',
};

export const CART_ITEM_DEFAULT_PROPS: CartItemProps = {
  inCartAmount: 1,
  item: PRODUCT,
  handleCartMinusClick: () => {
    console.log('cart minus');
  },
  handleCartPlusClick: () => {
    console.log('cart plus');
  },
  handleRemoveFromCart: () => {
    console.log('cart remove');
  },
  toggleFavorite: () => {
    console.log('favorite');
  },
};
