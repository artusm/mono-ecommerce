import { render, RenderResult } from '@testing-library/react';
import {create} from 'react-test-renderer';
import '@testing-library/jest-dom';

import { SELECT_DEFAULT_PROPS } from '../../props/constants';
import { createInitial, Select } from './Select';

describe('Select', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Select {...SELECT_DEFAULT_PROPS} />);
  });

  it('should render successfully', () => {
    const { baseElement } = renderResult;

    const tree = create(<Select {...SELECT_DEFAULT_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();

    expect(baseElement).toBeTruthy();
  });

  it('successfully create initial state', () => {
    const { initial, items } = SELECT_DEFAULT_PROPS;

    const TEST_CASE_1 = [undefined, items, false] as const;
    expect(createInitial(...TEST_CASE_1)).toBe(null);

    const TEST_CASE_2 = [undefined, items, true] as const;
    expect(createInitial(...TEST_CASE_2)).toBeInstanceOf(Map);

    const TEST_CASE_3 = [initial, items, true] as const;
    const testCase3Map = createInitial(...TEST_CASE_3);
    expect(testCase3Map).toBeInstanceOf(Map);
    expect((testCase3Map as Map<string, unknown>).has(initial[0])).toBe(true);

    const TEST_CASE_4 = [initial[0], items, false] as const;
    expect(createInitial(...TEST_CASE_4)).toBe(items[0]);

    const TEST_CASE_5 = [initial[0], items, true] as const;
    expect(createInitial(...TEST_CASE_5)).toBeInstanceOf(Map);

    const TEST_CASE_6 = ['wrong key', items, false] as const;
    expect(createInitial(...TEST_CASE_6)).toBe(null);
  });
});
