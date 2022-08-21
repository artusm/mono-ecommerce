import React, { useEffect, useRef, useState } from 'react';

import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';

import { useSearchbarSearchLazyQuery } from '@ecommerce/shared/graphql/types';
import { Searchbar } from '@ecommerce/shared/ui/Searchbar';

export const NavSearch: React.FC = () => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState(router.query.i as string);

    const [search, { data, loading }] = useSearchbarSearchLazyQuery();

    const debounceRef = useRef<ReturnType<typeof debounce> | null>(null);

    useEffect(() => {
        if (debounceRef.current) debounceRef.current.cancel();
        if (inputValue) {
            debounceRef.current = debounce(async () => {
                if (!inputValue) return;
                search({
                    variables: {
                        value: inputValue,
                    },
                });
            }, 300);
            debounceRef.current();
        }
    }, [inputValue]);

    return (
        <Searchbar
            items={data?.products?.data || []}
            input={inputValue}
            loading={loading}
            handleInput={(e) => {
                const { value } = e.currentTarget;
                setInputValue(value);
            }}
            handleSubmit={(e) => {
                e.preventDefault();
                router.push({
                    pathname: '/s',
                    query: { i: inputValue },
                });
            }}
            handleClear={() => setInputValue('')}
        />
    );
};
