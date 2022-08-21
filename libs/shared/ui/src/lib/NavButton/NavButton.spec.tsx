import '@testing-library/jest-dom';

import { RenderResult, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { NAV_BUTTON_DEFAULT_PROPS } from '@ecommerce/shared/props/constants';

import { NavButton, getHref } from './NavButton';

describe('NavButton', () => {
  let renderResult: RenderResult;
  const props = NAV_BUTTON_DEFAULT_PROPS;

  beforeEach(() => {
    renderResult = render(<NavButton {...props} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(<NavButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('proper href and title', () => {
    const href = getHref(props.type);

    const title = `${href} page`;
    const link = `/${href}`;

    const linkElement = screen.getByRole('link', { name: title });
    expect(linkElement).toHaveAttribute('href', link);
  });

  it('disabled if loading', () => {
    renderResult.rerender(<NavButton {...props} loading={true} />);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveClass('opacity-50 pointer-events-none');
  });
});
