import { ParsedUrlQuery } from 'querystring';

import type { ProductSearchQueryVariables } from '@ecommerce/shared/graphql/types';

import { PRICE_FILTER, SORT_FILTER } from './constants';

type SafeQuery = Map<string, string | string[]>;

export function searchSafeQuery(query: ParsedUrlQuery): SafeQuery {
    const ALLOWED_KEYS = new Set(['i', 'c', 'p', 's']);

    const safeQuery: SafeQuery = new Map(); // maybe safe ;)

    ALLOWED_KEYS.forEach((key) => {
        const data = query[key];

        if (data && data.length > 0) {
            safeQuery.set(key, data);
        }
    });

    return safeQuery;
}

const searchFilterHandler: Record<
    string,
    (value: string | string[]) => unknown
> = {
    s: (value): ProductSearchQueryVariables['s'] => {
        switch (value) {
            case SORT_FILTER.PRICE_LOW_HIGH:
                return 'price:asc';
            case SORT_FILTER.PRICE_HIGH_LOW:
                return 'price:desc';
            case SORT_FILTER.NAME:
                return 'name:asc';
            default:
                return 'price:asc';
        }
    },
    p: (value): ProductSearchQueryVariables['p'] => {
        switch (value) {
            case PRICE_FILTER.ZERO_TWENTY:
                return { gte: 0, lte: 19.99 };
            case PRICE_FILTER.TWENTY_FORTY:
                return { gte: 20, lte: 39.99 };
            case PRICE_FILTER.FORTY_EIGHTY:
                return { gte: 40, lte: 79.99 };
            case PRICE_FILTER.EIGHTY_PLUS:
                return { gte: 80 };
            default:
                return;
        }
    },
    regular: (value) => value,
};

export function searchGraphqlFilters(
    safeQuery: SafeQuery,
): ProductSearchQueryVariables {
    const filter: Record<string, unknown> = {};

    safeQuery.forEach((value, key) => {
        filter[key] = searchFilterHandler[key]
            ? searchFilterHandler[key](value)
            : searchFilterHandler.regular(value);
    });

    return filter;
}
