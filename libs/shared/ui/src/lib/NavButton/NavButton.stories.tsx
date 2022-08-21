import { Meta, Story } from '@storybook/react';

import { NavButton, NavButtonProps } from './NavButton';

export default {
  component: NavButton,
  title: 'Components/Button/Nav',
} as Meta;

const Template: Story<NavButtonProps> = (args) => <NavButton {...args} />;

export const Cart = Template.bind({});
Cart.args = {
  type: 'cartBlack',
};

export const UserNotLoading = Template.bind({});
UserNotLoading.args = {
  type: 'user',
  loading: false,
};

export const UserLoading = Template.bind({});
UserLoading.args = {
  type: 'user',
  loading: true,
};

export const Favorite = Template.bind({});
Favorite.args = {
  type: 'heart',
};
