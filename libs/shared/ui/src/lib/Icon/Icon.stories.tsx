import { Meta, Story } from '@storybook/react';

import { ICON_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';

import { Icon, IconProps } from './Icon';

export default {
  component: Icon,
  title: 'Components/Icon',
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = ICON_DEFAULT_PROPS;
