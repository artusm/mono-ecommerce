import { GlobalSeo } from '@/types/GlobalSeo';
import {
  ProductSlugQuery,
  useProductSlugQuery,
} from '@ecommerce/shared/graphql/types';
import { Layout } from '@/components/Layout';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { Product } from '@/scenes/Product';
import { withGlobalSeo } from '@/hocs/with-global-seo';
import { withApollo } from '@/hocs/with-apollo';

interface Props {
  globalSeo: GlobalSeo;
  products: ProductSlugQuery;
}

export const ProductPage: React.FC<Props> = ({ globalSeo, products }) => {
  const router = useRouter();

  const { data } = useProductSlugQuery({
    variables: {
      slug: router.query.slug as string,
    },
  });

  const product = useMemo(() => data?.products?.data[0].attributes, [data]);

  return (
    <Layout defaultSeo={globalSeo} seo={{ title: product?.name }}>
      <Product product={product} />
    </Layout>
  );
};

export default withApollo()(withGlobalSeo(ProductPage));
