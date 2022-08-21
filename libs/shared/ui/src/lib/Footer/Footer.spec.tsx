import { render, RenderResult, screen } from '@testing-library/react';
import {create} from 'react-test-renderer';
import '@testing-library/jest-dom';

import { Footer } from './Footer';

describe('Footer', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Footer />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('should have author link', () => {
    expect(screen.getByRole('link', { name: 'artusm' })).toBeTruthy();
  });
});
