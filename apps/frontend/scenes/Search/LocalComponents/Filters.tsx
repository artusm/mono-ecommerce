import { Select } from '@ecommerce/shared/ui/select';
import clsx from 'clsx';
import { PRICES, SORT } from '@/lib/constants';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { CategoriesSearchQuery } from '@ecommerce/shared/graphql/types';

interface Props {
  categories: NonNullable<CategoriesSearchQuery['categories']>['data'];
}

export const Filters: React.FC<Props> = (props) => {
  const { categories } = props;

  const router = useRouter();

  const readyCategories = useMemo(
    () =>
      categories.flatMap((category) =>
        category.attributes
          ? { value: category.attributes.slug, label: category.attributes.name }
          : []
      ),
    [categories]
  );

  const handleChange = (key: string, value?: string | string[]) => {
    const copyQuery = { ...router.query };

    delete copyQuery[key];
    if (value) copyQuery[key] = value;

    return void router.push({
      pathname: '/s',
      query: copyQuery,
    });
  };

  return (
    <div
      className={clsx(
        'mb-8 py-4 top-0 z-10 sticky',
        'flex flex-wrap gap-2',
        'bg-white border-b',
        'sm:(gap-4)'
      )}
    >
      <Select
        placeholder="Sort"
        items={SORT}
        onChange={(item) => handleChange('s', item)}
        initial={router.query['s']}
      />
      <Select
        placeholder="Price"
        items={PRICES}
        onChange={(item) => handleChange('p', item)}
        initial={router.query['p']}
        alignClasses={clsx(
          'left-1/2 transform -translate-x-1/2',
          'sm:(left-0 translate-x-0)'
        )}
      />
      <Select
        placeholder="Category"
        items={readyCategories}
        onChange={(item) => handleChange('c', item)}
        multiple
        initial={router.query['c']}
        alignClasses={clsx(
          'left-0',
          '350px:(right-0 left-auto)',
          'sm:(right-auto left-0)'
        )}
      />
    </div>
  );
};
