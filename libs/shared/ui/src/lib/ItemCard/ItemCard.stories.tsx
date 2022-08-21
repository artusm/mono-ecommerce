import { Story, Meta } from '@storybook/react';
import { ITEM_CARD_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';
import { ItemCard, ItemCardProps } from './ItemCard';

export default {
  component: ItemCard,
  title: 'Components/ItemCard',
} as Meta;

const Template: Story<ItemCardProps> = (args) => <ItemCard {...args} />;

export const Primary = Template.bind({});
Primary.args = ITEM_CARD_DEFAULT_PROPS;
