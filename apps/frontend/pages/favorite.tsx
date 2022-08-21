import React from 'react';
import { useSelector } from 'react-redux';

import { useFavoriteProductsQuery } from '@ecommerce/shared/graphql/types';

import { Layout } from '@/components/Layout';
import { withApollo } from '@/hocs/with-apollo';
import { withGlobalSeo } from '@/hocs/with-global-seo';
import { Favorite } from '@/scenes/Favorite';
import { AppState } from '@/store';
import { GlobalSeo } from '@/types/GlobalSeo';

interface Props {
  globalSeo: GlobalSeo;
}

export const FavoritePage: React.FC<Props> = ({ globalSeo }) => {
  const favoriteItemsSlugs = useSelector(
    (state: AppState) => state.favoriteItems.slugs,
  );
  const { data, loading } = useFavoriteProductsQuery({
    variables: {
      value: favoriteItemsSlugs,
    },
  });

  return (
    <Layout defaultSeo={globalSeo}>
      <Favorite products={data} isLoading={loading} />
    </Layout>
  );
};

export default withApollo()(withGlobalSeo(FavoritePage));
