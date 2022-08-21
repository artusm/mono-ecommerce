import { Story, Meta } from '@storybook/react';
import { SEARCHBAR_ITEM_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';
import { SearchbarItem, SearchbarItemProps } from './SearchbarItem';

export default {
  component: SearchbarItem,
  title: 'Components/Searchbar/Item',
} as Meta;

const Template: Story<SearchbarItemProps> = (args) => (
  <SearchbarItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...SEARCHBAR_ITEM_DEFAULT_PROPS,
};
