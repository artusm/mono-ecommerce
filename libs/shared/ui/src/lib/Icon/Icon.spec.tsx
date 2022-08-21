import { ICON_DEFAULT_PROPS } from '../../props/constants';
import { render, RenderResult, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

import { Icon } from './Icon';

describe('Icon', () => {
  let renderResult: RenderResult;
  const props = ICON_DEFAULT_PROPS;

  beforeEach(() => {
    renderResult = render(<Icon {...props} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(<Icon {...props} />).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('when loading show spinner instead of icon', () => {
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();

    renderResult.rerender(<Icon {...props} loading={true} />);

    expect(screen.queryByTestId('spinner')).toBeInTheDocument();
  });
});
