import { Meta, Story } from '@storybook/react';

import { Logo, LogoProps } from './Logo';

export default {
  component: Logo,
  title: 'Components/Logo',
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
