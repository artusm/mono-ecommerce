import { ITEM, SEARCHBAR_ITEM_DEFAULT_PROPS } from '../../props/constants';
import { render, screen } from '@testing-library/react';
import { SearchbarItem } from './SearchbarItem';
import {create} from 'react-test-renderer';

describe('SearchbarItem', () => {
  let element: HTMLElement;

  beforeEach(() => {
    const { baseElement } = render(
      <SearchbarItem {...SEARCHBAR_ITEM_DEFAULT_PROPS} />
    );

    element = baseElement;
  });

  it('should render successfully', () => {
    const tree = create(<SearchbarItem {...SEARCHBAR_ITEM_DEFAULT_PROPS} />)
      .toJSON();
    expect(tree).toMatchSnapshot();

    expect(element).toBeTruthy();
  });

  it('proper name and small description', () => {
    screen.getByText(ITEM.name);
    screen.getByText(ITEM.smallDescription);
  });
});
