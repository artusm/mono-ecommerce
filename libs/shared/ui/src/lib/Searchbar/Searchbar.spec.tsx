import { fireEvent, render, screen } from '@testing-library/react';
import {create} from 'react-test-renderer';
import '@testing-library/jest-dom';

import { Searchbar, SearchbarProps } from './Searchbar';

describe('Searchbar', () => {
  let renderResult: ReturnType<typeof render>;
  let element: HTMLElement;
  let input = '';

  const handleInput: SearchbarProps['handleInput'] = jest.fn((e) => {
    input = e.currentTarget.value;
  });

  const handleClear: SearchbarProps['handleClear'] = jest.fn(() => {
    input = '';
  });

  const handleSubmit: SearchbarProps['handleSubmit'] = jest.fn((e) => {
    e.preventDefault();
  });

  beforeEach(() => {
    input = '';

    renderResult = render(
      <Searchbar
        items={[]}
        input={input}
        handleInput={handleInput}
        handleClear={handleClear}
        handleSubmit={handleSubmit}
        loading={false}
      />
    );

    element = renderResult.baseElement;
  });

  it('should render successfully', () => {
    const tree = create(
        <Searchbar
          items={[]}
          input={input}
          handleInput={handleInput}
          handleClear={handleClear}
          handleSubmit={handleSubmit}
          loading={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();

    expect(element).toBeTruthy();
  });

  it('input works properly', () => {
    const testText = 'something nice';

    const inputElement: HTMLInputElement = screen.getByRole('searchbox', {
      name: 'search',
    });

    expect(inputElement.value).toBe('');

    fireEvent.change(inputElement, { target: { value: testText } });

    expect(handleInput).toHaveBeenCalledTimes(1);
    expect(input).toBe(testText);
  });

  it('search controls hidden when input is empty and vice versa', () => {
    const controlsElement = screen.getByTestId('search-controls');

    expect(controlsElement).toHaveClass('pointer-events-none');

    renderResult.rerender(
      <Searchbar
        items={[]}
        input={'sunny'}
        handleInput={handleInput}
        handleClear={handleClear}
        handleSubmit={handleSubmit}
        loading={false}
      />
    );

    expect(controlsElement).not.toHaveClass('pointer-events-none');
  });

  it('clear button works properly', () => {
    expect(input).toBe('');

    const inputElement: HTMLInputElement = screen.getByRole('searchbox', {
      name: 'search',
    });

    fireEvent.change(inputElement, { target: { value: 'nothing' } });

    const clearButtonElement = screen.getByTitle('clear input');

    fireEvent.click(clearButtonElement);
    expect(handleClear).toHaveBeenCalledTimes(1);
    expect(input).toBe('');
  });

  it('submit works', () => {
    const submitButton = screen.getByTitle('submit search');

    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
