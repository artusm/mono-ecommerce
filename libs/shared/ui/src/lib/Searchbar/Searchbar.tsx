import React, { useState } from 'react';
import clsx from 'clsx';
import { handleBlur } from '@ecommerce/shared/utils/handle-blur';
import type { SearchbarSearchQuery } from '@ecommerce/shared/graphql/types';
import { Control } from './LocalComponents/Control';
import { List } from './LocalComponents/List';
import FeatherIcon from 'feather-icons-react';

export type Items = NonNullable<SearchbarSearchQuery['products']>['data'];

export interface SearchbarProps {
  input: string;
  items: Items;
  handleClear: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

export const Searchbar: React.FC<SearchbarProps> = (props: SearchbarProps) => {
  const { handleClear, handleSubmit, handleInput, input, items, loading } =
    props;

  const [focus, setFocus] = useState(false);

  return (
    <div className="w-full z-50 relative">
      <form
        className={clsx(
          'w-full relative',
          'flex items-center',
          'bg-gray-100',
          'rounded-3xl',
          'transition-colors',
          !focus && 'hover:(bg-gray-200)'
        )}
        role="search"
        onSubmit={(e) => {
          handleSubmit(e);
          setFocus(false);
        }}
        onFocus={() => setFocus(true)}
        onBlur={(e) => {
          handleBlur(e)(() => setFocus(false));
        }}
      >
        <div
          className={clsx(
            'h-4 w-4 absolute left-4',
            'flex items-center',
            'transition-all',
            input ? 'opacity-0 scale-0' : 'w-4 mr-4'
          )}
          aria-hidden="true"
        >
          <FeatherIcon icon="search" />
        </div>
        <input
          className={clsx(
            'py-3 w-full',
            'transition-all',
            'bg-transparent outline-none',
            input ? 'pl-6 pr-10' : 'px-10'
          )}
          title="search"
          role="searchbox"
          placeholder="Search"
          autoComplete="off"
          value={input}
          onChange={handleInput}
        />
        <Control handleClear={handleClear} input={input} loading={loading} />
        {focus && <List items={items} setFocus={setFocus} />}
      </form>
      {focus && (
        <div
          className={clsx(
            'h-full w-full top-0 left-0 -z-2 fixed',
            'bg-gray-300 opacity-40'
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
