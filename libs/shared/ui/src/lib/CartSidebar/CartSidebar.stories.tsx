import { Story, Meta } from '@storybook/react';
import { CART_SIDEBAR_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';
import { CartSidebar, CartSidebarProps } from './CartSidebar';

export default {
  component: CartSidebar,
  title: 'Components/Cart/Sidebar',
} as Meta;

const Template: Story<CartSidebarProps> = (args) => <CartSidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...CART_SIDEBAR_DEFAULT_PROPS,
};

export const Loading = Template.bind({});
Loading.args = {
  ...CART_SIDEBAR_DEFAULT_PROPS,
  isLoading: true,
};

export const NoUser = Template.bind({});
NoUser.args = {
  ...CART_SIDEBAR_DEFAULT_PROPS,
  isUser: false,
};
