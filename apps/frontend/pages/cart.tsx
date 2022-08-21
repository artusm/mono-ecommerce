import React from 'react';
import { useSelector } from 'react-redux';

import { useProductCartQuery } from '@ecommerce/shared/graphql/types';

import { Layout } from '@/components/Layout';
import { withApollo } from '@/hocs/with-apollo';
import { withGlobalSeo } from '@/hocs/with-global-seo';
import { Cart } from '@/scenes/Cart';
import { AppState } from '@/store';
import { GlobalSeo } from '@/types/GlobalSeo';

interface Props {
  globalSeo: GlobalSeo;
}

export const Index: React.FC<Props> = ({ globalSeo }) => {
  const cardItems = useSelector((state: AppState) => state.cardItems.items);
  console.log(cardItems);

  const { data, loading } = useProductCartQuery({
    variables: {
      value: Object.keys(cardItems),
    },
  });

  return (
    <Layout defaultSeo={globalSeo}>
      <Cart products={data} isProductsLoading={loading} cartItems={cardItems} />
    </Layout>
  );
};

export default withApollo()(withGlobalSeo(Index));
