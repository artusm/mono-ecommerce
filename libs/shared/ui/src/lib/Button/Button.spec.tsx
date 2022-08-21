import '@testing-library/jest-dom';
import { RenderResult, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { BUTTON_DEFAULT_PROPS } from '../../props/constants';
import { Button } from './index';

describe('Button', () => {
  let renderResult: RenderResult;
  const props = BUTTON_DEFAULT_PROPS;

  beforeEach(() => {
    renderResult = render(<Button {...props} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(<Button {...props} />).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('should render as "a" or "button" tag', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByRole('link')).toBeFalsy();

    renderResult.rerender(<Button tag="a">test</Button>);

    expect(screen.getByText('test').closest('a')).toBeInTheDocument();
    expect(screen.queryByRole('button')).toBeFalsy();
  });
});
