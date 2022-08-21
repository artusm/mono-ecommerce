import { render, RenderResult, screen } from '@testing-library/react';
import {create} from 'react-test-renderer';
import '@testing-library/jest-dom';

import { CartItem } from './CartItem';
import { CART_ITEM_DEFAULT_PROPS } from '../../props/constants';
import { formatPrice } from '@ecommerce/shared/utils/format-price';

describe('CartItem', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<CartItem {...CART_ITEM_DEFAULT_PROPS} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(<CartItem {...CART_ITEM_DEFAULT_PROPS} />)
      .toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('main elements are exists and properly formatted', () => {
    const { item, inCartAmount } = CART_ITEM_DEFAULT_PROPS;
    const { price, name, smallDescription } = item;

    const properPrice = formatPrice(price * (inCartAmount || 0));

    screen.getByText(name);
    screen.getByText(properPrice);
    screen.getByText(smallDescription);
  });
});
