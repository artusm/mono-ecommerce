import { Meta, Story } from '@storybook/react';

import { SELECT_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';

import { Select, SelectProps } from './Select';

export default {
  component: Select,
  title: 'Components/Select',
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...SELECT_DEFAULT_PROPS };
