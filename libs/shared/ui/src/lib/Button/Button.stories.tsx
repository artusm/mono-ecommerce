import { Meta, Story } from '@storybook/react';

import { BUTTON_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';

import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = BUTTON_DEFAULT_PROPS;
