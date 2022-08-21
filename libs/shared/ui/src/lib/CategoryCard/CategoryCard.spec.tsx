import { RenderResult, render } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { CATEGORY_CARD_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';

import { CategoryCard } from './CategoryCard';

describe('CategoryCard', () => {
  let renderResult: RenderResult;
  const props = CATEGORY_CARD_DEFAULT_PROPS;

  beforeEach(() => {
    renderResult = render(<CategoryCard {...props} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(<CategoryCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });
});
