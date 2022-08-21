import React from 'react';

import clsx from 'clsx';

import {
    CategoryCard,
    type CategoryCardProps,
} from '@ecommerce/shared/ui/CategoryCard';

import type { GetHomePageData } from '../Home';

interface Props {
    categories: GetHomePageData<'categories'>;
}

const COLORS = ['yellow', 'blue', 'green'] as CategoryCardProps['color'][];

export const CategoriesSection: React.FC<Props> = (props) => {
    const { categories } = props;

    return (
        <section className="mb-8">
            <h2 className="mb-4 font-semibold text-3xl">Categories</h2>
            <ul
                className={clsx(
                    'flex flex-wrap gap-4',
                    categories?.data.length > 2 && 'justify-between',
                )}
            >
                {categories?.data.map(
                    (category, index) =>
                        category.attributes && (
                            <li
                                className={clsx(
                                    'w-full',
                                    'sm:(w-[calc(50%-0.5rem)])',
                                    'lg:(w-[calc(33.3%-1rem)])',
                                )}
                                key={category.id}
                            >
                                <CategoryCard
                                    category={category.attributes}
                                    color={COLORS[index % COLORS.length]}
                                />
                            </li>
                        ),
                )}
            </ul>
        </section>
    );
};
