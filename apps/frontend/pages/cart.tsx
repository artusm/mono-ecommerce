import { Layout } from '../components/Layout';
import { withGlobalSeo } from '../hocs/with-global-seo';
import { GlobalSeo } from '../types/GlobalSeo';
import { Cart } from '../scenes/Cart';
import { useProductCartQuery } from '@ecommerce/shared/graphql/types';
import {withApollo} from "../hocs/with-apollo";
import {useSelector} from "react-redux";
import {AppState} from "../store";

interface Props {
  globalSeo: GlobalSeo;
}

export const Index: React.FC<Props> = ({ globalSeo }) => {
  const cardItems = useSelector((state: AppState) => state.cardItems.items);
  console.log(cardItems)

  const { data, loading } = useProductCartQuery({
    variables: {
      value: Object.keys(cardItems),
    }
  });

  return (
    <Layout defaultSeo={globalSeo}>
      <Cart products={data} isProductsLoading={loading} cartItems={cardItems} />
    </Layout>
  );
};

export default withApollo()(withGlobalSeo(Index));
