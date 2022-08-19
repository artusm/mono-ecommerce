import { GlobalSeo } from '../../types/GlobalSeo';
import {
  useCategoriesSearchQuery,
  useProductSearchQuery,
} from '@ecommerce/shared/graphql/types';
import { Layout } from '../../components/Layout';
import {useMemo} from 'react';
import {searchGraphqlFilters, searchSafeQuery} from '../../lib/search';
import { Search } from '../../scenes/Search';
import { withGlobalSeo } from '../../hocs/with-global-seo';
import {withApollo} from "../../hocs/with-apollo";
import {useRouter} from "next/router";

interface Props {
  globalSeo: GlobalSeo;
}

const useFilters = (): ReturnType<typeof searchGraphqlFilters> => {
  const {query} = useRouter();
  const filters = useMemo(() => {
    const safeQuery = searchSafeQuery(query);

    return  searchGraphqlFilters(safeQuery);
  }, [query]);

  return filters;
};

export const User: React.FC<Props> = (props) => {
  const {
    globalSeo,
  } = props;

  const filters = useFilters();

  const { data } = useProductSearchQuery({
    variables: filters
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
