import React, { useMemo } from 'react';

import { useRouter } from 'next/router';

import {
  useCategoriesSearchQuery,
  useProductSearchQuery,
} from '@ecommerce/shared/graphql/types';

import { Layout } from '@/components/Layout';
import { withApollo } from '@/hocs/with-apollo';
import { withGlobalSeo } from '@/hocs/with-global-seo';
import { searchGraphqlFilters, searchSafeQuery } from '@/lib/search';
import { Search } from '@/scenes/Search';
import { GlobalSeo } from '@/types/GlobalSeo';

interface Props {
  globalSeo: GlobalSeo;
}

const useFilters = (): ReturnType<typeof searchGraphqlFilters> => {
  const { query } = useRouter();
  const filters = useMemo(() => {
    const safeQuery = searchSafeQuery(query);

    return searchGraphqlFilters(safeQuery);
  }, [query]);

  return filters;
};

export const User: React.FC<Props> = (props) => {
  const { globalSeo } = props;

  const filters = useFilters();

  const { data } = useProductSearchQuery({
    variables: filters,
  });

  const { data: categoriesData } = useCategoriesSearchQuery();

  return (
    <Layout defaultSeo={globalSeo}>
      <Search
        products={data?.products?.data || []}
        categories={categoriesData?.categories?.data || []}
      />
    </Layout>
  );
};

export default withApollo()(withGlobalSeo(User));
