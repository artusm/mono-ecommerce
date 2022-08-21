import { CATEGORY_CARD_DEFAULT_PROPS } from '../../props/constants';
import { Story, Meta } from '@storybook/react';
import { CategoryCard, CategoryCardProps } from './CategoryCard';

export default {
  component: CategoryCard,
  title: 'Components/CategoryCard',
} as Meta;

const Template: Story<CategoryCardProps> = (args) => {
  return (
    <div className="w-96">
      <CategoryCard {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = CATEGORY_CARD_DEFAULT_PROPS;
