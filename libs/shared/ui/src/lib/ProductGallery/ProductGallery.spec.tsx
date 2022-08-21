import { render, RenderResult, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

import { ProductGallery } from './ProductGallery';
import { PRODUCT_GALLERY_DEFAULT_PROPS } from '../../props/constants';

describe('ProductGallery', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <ProductGallery {...PRODUCT_GALLERY_DEFAULT_PROPS} />
    );
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(
      <ProductGallery {...PRODUCT_GALLERY_DEFAULT_PROPS} />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('should have proper amount of images', () => {
    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(PRODUCT_GALLERY_DEFAULT_PROPS.images.length);
  });
});
