import { useFavoriteProductsQuery } from '@ecommerce/shared/graphql/types';
import { Layout } from '@/components/Layout';

import { withGlobalSeo } from '@/hocs/with-global-seo';
import { GlobalSeo } from '@/types/GlobalSeo';
import { Favorite } from '@/scenes/Favorite';
import {withApollo} from "@/hocs/with-apollo";
import React from "react";
import {useSelector} from "react-redux";
import {AppState} from "@/store";

interface Props {
  globalSeo: GlobalSeo;
}

export const FavoritePage: React.FC<Props> = ({ globalSeo }) => {
  const favoriteItemsSlugs = useSelector((state: AppState) => state.favoriteItems.slugs);
  const { data, loading } = useFavoriteProductsQuery({
    variables: {
      value: favoriteItemsSlugs,
    }
  });

  return (
    <Layout defaultSeo={globalSeo}>
      <Favorite products={data} isLoading={loading} />
    </Layout>
  );
};

export default withApollo()(withGlobalSeo((FavoritePage)));
