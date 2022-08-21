import React from 'react';
import styles from './index.module.scss';
import { withGlobalSeo } from '@/hocs/with-global-seo';
import { withApollo } from '@/hocs/with-apollo';
import { useHomePageQuery } from '@ecommerce/shared/graphql/types';
import { Home } from '@/scenes/Home';
import { Layout } from '@/components/Layout/Layout';
import {GlobalSeo} from "@/types/GlobalSeo";

interface Props {
  globalSeo: GlobalSeo;
}

export const Index: React.FC<Props> = (props) => {
  const { data: homeData } = useHomePageQuery();

  return (
    <Layout defaultSeo={props.globalSeo}>
      <div className={styles.page}>
        <Home
          products={homeData?.homePage.data.attributes.products}
          categories={homeData?.homePage.data.attributes.categories}
        />
      </div>
    </Layout>
  );
};

export default withApollo()(withGlobalSeo(Index));
