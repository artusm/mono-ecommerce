import { CATEGORY_CARD_DEFAULT_PROPS } from '../../props/constants';
import { render, RenderResult } from '@testing-library/react';
import {create} from 'react-test-renderer';

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
