import '@testing-library/jest-dom';

import { RenderResult, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { CART_SIDEBAR_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';
import { formatPrice } from '@ecommerce/shared/utils/format-price';

import { CartSidebar } from './CartSidebar';

describe('CartSidebar', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<CartSidebar {...CART_SIDEBAR_DEFAULT_PROPS} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(
      <CartSidebar {...CART_SIDEBAR_DEFAULT_PROPS} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('should have proper price', () => {
    const { cartTotal } = CART_SIDEBAR_DEFAULT_PROPS;

    expect(screen.getByText(formatPrice(cartTotal))).toBeInTheDocument();
  });
});
