import React from 'react';
import {
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor,
} from '@testing-library/react';
import {create} from 'react-test-renderer';
import '@testing-library/jest-dom';

import { ProductInformation } from './ProductInformation';
import { PRODUCT_INFORMATION_DEFAULT_PROPS } from '../../props/constants';


jest.mock('react-markdown', () => (props: { children: React.ReactNode }) => {
  const ComponentToMock: React.FC<{ children: React.ReactNode }> = (props) => (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{props.children}</>
  );

  return <ComponentToMock>{props.children}</ComponentToMock>;
});

describe('ProductInformation', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <ProductInformation {...PRODUCT_INFORMATION_DEFAULT_PROPS} />
    );
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(<ProductInformation {...PRODUCT_INFORMATION_DEFAULT_PROPS} />)
      .toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('should have proper amount of items', () => {
    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(
      PRODUCT_INFORMATION_DEFAULT_PROPS.information.length
    );
  });

  it('show content on click', async () => {
    const { content, title } =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      PRODUCT_INFORMATION_DEFAULT_PROPS.information[1]!;

    const specificItemButton = screen.getByRole('button', { name: title });

    expect(screen.queryByText(content)).not.toBeInTheDocument();
    fireEvent.click(specificItemButton);

    await waitFor(() =>
      expect(screen.queryByText(content)).toBeInTheDocument()
    );
  });
});
