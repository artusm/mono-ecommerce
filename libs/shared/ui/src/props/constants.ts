import { ButtonProps } from '@ecommerce/shared/ui/Button';
import {CartItemProps} from "@ecommerce/shared/ui/CartItem";
import {ProductSidebarProps} from "@ecommerce/shared/ui/ProductSidebar";
import {CartSidebarProps} from "@ecommerce/shared/ui/CartSidebar";
import {CategoryCardProps} from "@ecommerce/shared/ui/CategoryCard";
import {IconProps} from "@ecommerce/shared/ui/Icon";
import {ItemCardProps} from "@ecommerce/shared/ui/ItemCard";
import {NavButtonProps} from "@ecommerce/shared/ui/NavButton";
import {ProductGalleryProps} from "@ecommerce/shared/ui/ProductGallery";

import cat from './cat.jpg';
import cat2 from './cat2.jpeg';

console.log(cat2)

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

export const ITEM: ItemCardProps['item'] = {
  slug: 'cat-cat',
  price: 65,
  name: 'cat cat',
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
  smallDescription: 'smallDescription',
  description: 'description',
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

export const CART_SIDEBAR_DEFAULT_PROPS: CartSidebarProps = {
  cartTotal: 100,
  isUser: true,
  handleCheckoutClick: async () => {
    console.log('checkout');
  },
  isLoading: false,
};

export const CATEGORY_CARD_DEFAULT_PROPS: CategoryCardProps = {
  category: {
    smallDescription:
      'smalll des',
    image: {
      data: {
        attributes: {
          url: cat,
        },
      },
    },
    slug: '1',
  },
};
export const ICON_DEFAULT_PROPS: IconProps = {
  icon: 'cart',
};

export const ITEM_CARD_DEFAULT_PROPS: ItemCardProps = {
  item: ITEM,
  size: 'base',
  handleCartClick: () => console.log('cart clicked'),
  handleAmountCartClick: () => console.log('amount cart clicked'),
  handleFavoriteClick: () => console.log('favorite clicked'),
};
export const NAV_BUTTON_DEFAULT_PROPS: NavButtonProps = {
  type: 'heart',
};
export const PRODUCT_GALLERY_DEFAULT_PROPS: ProductGalleryProps = {
  images: [
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
};
