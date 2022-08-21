import { Story, Meta } from '@storybook/react';
import { CART_ITEM_DEFAULT_PROPS } from '../../props/constants';
import { CartItem, CartItemProps } from './CartItem';

export default {
  component: CartItem,
  title: 'Components/Cart/Item',
} as Meta;

const Template: Story<CartItemProps> = (args) => {
  return (
    <div className="max-w-[800px]">
      <CartItem {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  ...CART_ITEM_DEFAULT_PROPS,
};
