import { Story, Meta } from '@storybook/react';
import { PRODUCT_GALLERY_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';
import { ProductGallery, ProductGalleryProps } from './ProductGallery';

export default {
  component: ProductGallery,
  title: 'Components/Product/Gallery',
} as Meta;

const Template: Story<ProductGalleryProps> = (args) => (
  <ProductGallery {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...PRODUCT_GALLERY_DEFAULT_PROPS,
};
