import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { SEARCHBAR_ITEM } from '@ecommerce/shared/props/constants';
import { Searchbar, SearchbarProps } from './Searchbar';

export default {
  component: Searchbar,
  title: 'Components/Searchbar',
} as Meta;

const Template: Story<SearchbarProps> = (args) => {
  const [input, setInput] = useState('');

  return (
    <div className="w-96">
      <Searchbar
        {...args}
        input={input}
        handleInput={(e) => setInput(e.currentTarget.value)}
        handleSubmit={(e) => {
          e.preventDefault();
          console.log('submit');
        }}
        handleClear={() => setInput('')}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  items: [SEARCHBAR_ITEM],
};
