import { ButtonProps } from '@ecommerce/shared/ui/Button';
import {CartItemProps} from "@ecommerce/shared/ui/CartItem";
import {CartSidebarProps} from "@ecommerce/shared/ui/CartSidebar";
import {CategoryCardProps} from "@ecommerce/shared/ui/CategoryCard";
import {IconProps} from "@ecommerce/shared/ui/Icon";
import {ItemCardProps} from "@ecommerce/shared/ui/ItemCard";
import {NavButtonProps} from "@ecommerce/shared/ui/NavButton";
import {ProductGalleryProps} from "@ecommerce/shared/ui/ProductGallery";
import {ProductSidebarProps} from "@ecommerce/shared/ui/ProductSidebar";
import {ProductInformationProps} from "@ecommerce/shared/ui/ProductInformation";
import {SearchbarItemProps} from "@ecommerce/shared/ui/SearchbarItem";
import {SelectProps} from "@ecommerce/shared/ui/Select";

import cat from './cat.jpg';
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

export const PRODUCT_INFORMATION_DEFAULT_PROPS: ProductInformationProps = {
  information: [...Array(10).keys()].map((_value, index) => ({
    title: `Title${index + 1}`,
    content: `content${index + 1}`,
  })),
};

export const PRODUCT_SIDEBAR_DEFAULT_PROPS: ProductSidebarProps = {
  product: PRODUCT,
  handleCartClick: () => {
    console.log('cart');
  },
  handleRemoveCartClick: () => {
    console.log('remove cart');
  },
  handleFavoriteClick: () => {
    console.log('favorite');
  },
  inCartAmount: 0,
  isFavorite: true,
};

export const SEARCHBAR_ITEM_DEFAULT_PROPS: SearchbarItemProps = {
  item: {
    slug: 'cat-cat',
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
  },
  handleClick: () => {
    console.log('clicked')
  },
};

export const SELECT_ITEM = {
  label: 'Label1',
  value: 'value1',
};

export const SELECT_DEFAULT_PROPS: Required<
  Omit<SelectProps, 'placeholder' | 'multiple'>
  > = {
  items: [SELECT_ITEM],
  initial: ['value1'],
  alignClasses: '',
  onChange: () => console.log('changed'),
};
