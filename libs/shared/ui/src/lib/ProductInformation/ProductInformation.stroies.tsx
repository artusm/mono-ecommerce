import { Story, Meta } from '@storybook/react';
import { PRODUCT_INFORMATION_DEFAULT_PROPS } from '../../props/constants';
import {
  ProductInformation,
  ProductInformationProps,
} from './ProductInformation';

export default {
  component: ProductInformation,
  title: 'Components/Product/Information',
} as Meta;

const Template: Story<ProductInformationProps> = (args) => (
  <ProductInformation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...PRODUCT_INFORMATION_DEFAULT_PROPS,
};
