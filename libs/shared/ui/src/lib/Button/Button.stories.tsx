import { BUTTON_DEFAULT_PROPS } from '../../props/constants';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = BUTTON_DEFAULT_PROPS;
